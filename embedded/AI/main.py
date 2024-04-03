import argparse
import sys
import time
import cv2 as cv
import mediapipe as mp
import numpy as np
import threading
import argparse
import subprocess
import os
import time

from picamera2 import Picamera2
import face_recognition

from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe.framework.formats import landmark_pb2

current_dir = os.path.dirname(os.path.realpath(__file__))

mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
COUNTER, FPS = 0, 0
START_TIME = time.time()
DETECTION_RESULT = None
INDEX = 0

# 가상 피팅 사진 파일 경로
looks = [
    ['clothes/satur_T.png', 'clothes/blue_pants.png', None],
    ['clothes/ck_T.png', 'clothes/navy_skirt.png', None], 
    ['clothes/white_cardigan.png', 'clothes/blue_skirt.png', None], 
    [None, None, 'clothes/black_dress.png']
    ]

# 여러 얼굴 사진의 파일 경로
image_paths = [
    os.path.join(current_dir, "public/face1.png"),
    os.path.join(current_dir, "public/face2.png"),
    # 여기에 더 많은 이미지 경로를 추가할 수 있습니다.
]



# 이미지를 불러오고 필요한 색 공간으로 변환
def load_and_convert_image(image_path, color_space='RGB'):
    image = cv.imread(image_path, cv.IMREAD_UNCHANGED)
    if color_space == 'RGB':
        image = cv.cvtColor(image, cv.COLOR_BGR2RGB)
    elif color_space == 'RGBA':
        image = cv.cvtColor(image, cv.COLOR_BGRA2RGBA)
    return image

# 상의 이미지에서 최상단 좌우 극단점을 찾기
def find_top_extremes(image):
    gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    _, binary = cv.threshold(gray, 127, 255, cv.THRESH_BINARY)
    contours, _ = cv.findContours(binary, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
    image_center_x = gray.shape[1] // 2
    left_topmost, right_topmost = None, None
    for contour in contours:
        for point in contour:
            x, y = point[0]
            if x < image_center_x and (left_topmost is None or y < left_topmost[1]):
                left_topmost = (x, y)
            elif x >= image_center_x and (right_topmost is None or y < right_topmost[1]):
                right_topmost = (x, y)
    distance = np.linalg.norm(np.array(left_topmost) - np.array(right_topmost))
    return distance, left_topmost, right_topmost

# 하의 이미지에서 최상단 좌우 극단점을 찾기
def find_pants_extremes(image):
    gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    _, binary = cv.threshold(gray, 127, 255, cv.THRESH_BINARY_INV)
    contours, _ = cv.findContours(binary, cv.RETR_LIST, cv.CHAIN_APPROX_NONE)
    image_center_x = gray.shape[1] // 2
    left_topmost, right_topmost = None, None
    for contour in contours:
        for point in contour:
            x, y = point[0]
            if x < image_center_x and (left_topmost is None or y < left_topmost[1]):
                left_topmost = (x, y)
            elif x >= image_center_x and (right_topmost is None or y < right_topmost[1]):
                right_topmost = (x, y)
    distance = np.sqrt((right_topmost[0] - left_topmost[0])**2 + (right_topmost[1] - left_topmost[1])**2)
    return distance, left_topmost, right_topmost

# 상의 이미지와 사람의 어깨 너비 사이의 스케일 팩터 계산
def calculate_scale_factor_for_top(shoulder_width, top_distance, scale_adjustment=0.45):
    # print((shoulder_width * scale_adjustment) / top_distance)
    return (shoulder_width * scale_adjustment) / top_distance

def calculate_scale_factor_for_dress(shoulder_width, top_distance, scale_adjustment=0.35):
    """상의 이미지와 사람의 어깨 너비 사이의 스케일 팩터를 계산합니다."""
    print((shoulder_width * scale_adjustment) / top_distance)
    return (shoulder_width * scale_adjustment) / top_distance

# 하의 이미지와 사람의 골반 너비 사이의 스케일 팩터 계산
def calculate_scale_factor_for_pants(hip_width, pants_distance, scale_adjustment=1.4):
    # print((hip_width * scale_adjustment) / pants_distance)
    return (hip_width * scale_adjustment) / pants_distance

# 계산된 스케일 팩터를 사용하여 사람 이미지 위에 옷 이미지 오버레이
def overlay_clothing_on_person(person_image, clothing_image, overlay_position, scale_factor, person_image_shape):
    
    resized_clothing = cv.resize(clothing_image, None, fx=scale_factor, fy=scale_factor, interpolation=cv.INTER_AREA)
    overlay_x, overlay_y = overlay_position
    image_height, image_width, _ = person_image_shape
    for i in range(resized_clothing.shape[0]):
        for j in range(resized_clothing.shape[1]):
            if resized_clothing[i, j, 3] > 0:  # 알파 채널 체크
                x, y = int(overlay_x + j), int(overlay_y + i)
                if 0 <= x < image_width and 0 <= y < image_height:
                    person_image[y, x, :] = resized_clothing[i, j, :3]
    return person_image

#  main 실행 함수
def AR_Fitting(model: str, num_poses: int,
        min_pose_detection_confidence: float,
        min_pose_presence_confidence: float, min_tracking_confidence: float,
        output_segmentation_masks: bool,
        width: int, height: int) -> None:
    
    # Picamera2 객체 생성 및 카메라 설정
    picam2 = Picamera2()
    preview_config = picam2.create_preview_configuration(main={"size": (width, height)})
    picam2.configure(preview_config)
    picam2.start()

    # 시각화에 사용될 파라미터 설정
    # row_size = 50  # 픽셀 단위
    # left_margin = 24  # 픽셀 단위
    # text_color = (0, 0, 0)  # 검정색
    # font_size = 1
    # font_thickness = 1
    # fps_avg_frame_count = 10

    # 결과 저장 및 FPS 계산을 위한 함수
    def save_result(result: vision.PoseLandmarkerResult,
                    unused_output_image: mp.Image, timestamp_ms: int):
        # global FPS, COUNTER, START_TIME, DETECTION_RESULT
        global DETECTION_RESULT

        # FPS 계산
        # if COUNTER % fps_avg_frame_count == 0:
        #     FPS = fps_avg_frame_count / (time.time() - START_TIME)
        #     START_TIME = time.time()

        # 탐지 결과 저장
        DETECTION_RESULT = result
        # COUNTER += 1

    # 모델과 탐지 옵션 설정
    base_options = python.BaseOptions(model_asset_path=model)
    options = vision.PoseLandmarkerOptions(
        base_options=base_options,
        running_mode=vision.RunningMode.LIVE_STREAM,
        num_poses=num_poses,
        min_pose_detection_confidence=min_pose_detection_confidence,
        min_pose_presence_confidence=min_pose_presence_confidence,
        min_tracking_confidence=min_tracking_confidence,
        output_segmentation_masks=output_segmentation_masks,
        result_callback=save_result)
    detector = vision.PoseLandmarker.create_from_options(options)

    while True:
        top_image_path = looks[INDEX][0]
        pants_image_path = looks[INDEX][1]
        dress_image_path = looks[INDEX][2]

        # 해당 이미지 경로가 None이 아닌 경우에만 이미지를 불러오도록 수정합니다.
        if top_image_path:
            top_image = load_and_convert_image(top_image_path, color_space='RGBA')
            top_distance, _, _ = find_top_extremes(top_image)

        if pants_image_path:
            pants_image = load_and_convert_image(pants_image_path, color_space='RGBA')
            pants_distance, _, _ = find_pants_extremes(pants_image)

        if dress_image_path:
            dress_image = load_and_convert_image(dress_image_path, color_space='RGBA')
            dress_distance, _, _ = find_top_extremes(dress_image)


        # picamera2를 통해 이미지 캡처
        image = picam2.capture_array()
        if image is None:
            sys.exit('ERROR: Unable to capture from camera. Please verify your camera settings.')

        # 이미지 반전
        image = cv.flip(image, 1)

        # 이미지를 RGB로 변환
        rgb_image = cv.cvtColor(image, cv.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_image)

        # 비동기 탐지 실행
        detector.detect_async(mp_image, time.time_ns() // 1_000_000)

        # # FPS 표시
        # fps_text = 'FPS = {:.1f}'.format(FPS)
        # text_location = (left_margin, row_size)
        # current_frame = image
        # cv.putText(current_frame, fps_text, text_location,
        #             cv.FONT_HERSHEY_DUPLEX,
        #             font_size, text_color, font_thickness, cv.LINE_AA)

        if len(current_frame.shape) == 2:
            current_frame = cv.cvtColor(current_frame, cv.COLOR_GRAY2BGR)
        elif current_frame.shape[2] == 4:
            current_frame = cv.cvtColor(current_frame, cv.COLOR_RGBA2BGR)

        # 탐지 결과가 있을 경우 랜드마크를 그림
        if DETECTION_RESULT and len(DETECTION_RESULT.pose_landmarks) > 0:
            # 원피스
            if dress_image_path:
                if DETECTION_RESULT.pose_landmarks[0][11] and DETECTION_RESULT.pose_landmarks[0][12]:
                    left_shoulder, right_shoulder = DETECTION_RESULT.pose_landmarks[0][11], DETECTION_RESULT.pose_landmarks[0][12]
                    left_shoulder_x, left_shoulder_y = int(left_shoulder.x * width), int(left_shoulder.y * height)
                    right_shoulder_x, right_shoulder_y = int(right_shoulder.x * width), int(right_shoulder.y * height)
                    shoulder_width = np.sqrt((right_shoulder_x - left_shoulder_x) ** 2 + (right_shoulder_y - left_shoulder_y) ** 2)
                    scale_factor_dress = calculate_scale_factor_for_dress(shoulder_width, dress_distance)
                    overlay_position_dress = ((left_shoulder_x + right_shoulder_x) // 2 - (dress_image.shape[1] * scale_factor_dress) // 2, min(left_shoulder_y, right_shoulder_y) - (shoulder_width * scale_factor_dress) / 2.5)
                    current_frame = overlay_clothing_on_person(current_frame, dress_image, overlay_position_dress, scale_factor_dress, current_frame.shape)
            # 상의와 하의
            else:
                # 하의
                if DETECTION_RESULT.pose_landmarks[0][23] and DETECTION_RESULT.pose_landmarks[0][24]:
                    left_hip, right_hip = DETECTION_RESULT.pose_landmarks[0][23], DETECTION_RESULT.pose_landmarks[0][24]
                    left_hip_x, left_hip_y = int(left_hip.x * width), int(left_hip.y * height)
                    right_hip_x, right_hip_y = int(right_hip.x * width), int(right_hip.y * height)
                    hip_width = np.sqrt((right_hip_x - left_hip_x) ** 2 + (right_hip_y - left_hip_y) ** 2)
                    scale_factor_pants = calculate_scale_factor_for_pants(hip_width, pants_distance)
                    overlay_position_pants = ((left_hip_x + right_hip_x) // 2 - (pants_image.shape[1] * scale_factor_pants) // 2, left_hip_y - (hip_width * scale_factor_pants))
                    current_frame = overlay_clothing_on_person(current_frame, pants_image, overlay_position_pants, scale_factor_pants, current_frame.shape)
                #상의
                if DETECTION_RESULT.pose_landmarks[0][11] and DETECTION_RESULT.pose_landmarks[0][12]:
                    left_shoulder, right_shoulder = DETECTION_RESULT.pose_landmarks[0][11], DETECTION_RESULT.pose_landmarks[0][12]
                    left_shoulder_x, left_shoulder_y = int(left_shoulder.x * width), int(left_shoulder.y * height)
                    right_shoulder_x, right_shoulder_y = int(right_shoulder.x * width), int(right_shoulder.y * height)
                    shoulder_width = np.sqrt((right_shoulder_x - left_shoulder_x) ** 2 + (right_shoulder_y - left_shoulder_y) ** 2)
                    scale_factor_top = calculate_scale_factor_for_top(shoulder_width, top_distance)
                    overlay_position_top = ((left_shoulder_x + right_shoulder_x) // 2 - (top_image.shape[1] * scale_factor_top) // 2, min(left_shoulder_y, right_shoulder_y) - (shoulder_width * scale_factor_top) / 2)
                    current_frame = overlay_clothing_on_person(current_frame, top_image, overlay_position_top, scale_factor_top, current_frame.shape)

        else:
            print('No person detected')

        # 최종 이미지 표시
        cv.imshow('Mediapipe Feed', current_frame)
        
        # 'q'를 누르면 루프 종료
        if cv.waitKey(5) & 0xFF == ord('q'):
            break

    # 자원 해제
    cv.destroyAllWindows()
    picam2.stop()


def face_recognition():
    known_face_encodings = []
    for image_path in image_paths:
        image = face_recognition.load_image_file(image_path)
        # 이미지 내 첫 번째 얼굴에 대한 인코딩을 리스트에 추가
        encoding = face_recognition.face_encodings(image)[0]
        known_face_encodings.append(encoding)

    print("Known faces encoded")

    face_id = "DamaskRose"  # 인식된 사람의 이름
    name = "<Unknown Person>"

    while True:
        print("Capturing image.")
        # libcamera-still을 사용하여 카메라에서 이미지 캡처
        image_path = "/tmp/captured_image.jpg"
        subprocess.run(["libcamera-still", "-o", image_path, "-t", "1", "--nopreview"], check=True)

        # 캡처한 이미지를 불러오기
        captured_image = face_recognition.load_image_file(image_path)

        # 캡처한 이미지에서 모든 얼굴과 얼굴 인코딩 찾기
        face_locations = face_recognition.face_locations(captured_image)
        face_encodings = face_recognition.face_encodings(captured_image, face_locations)

        print(f"Found {len(face_locations)} faces in image.")
        for face_encoding in face_encodings:
            # 캡처한 이미지의 얼굴이 알려진 얼굴 중 하나와 일치하는지 확인
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding, tolerance=0.5)
            if True in matches:
                name = face_id
                print(f"Person Detected: {name}!")
            else:
                name = "<Unknown Person>"
                print("No known faces detected.")
            
            # 인식 결과를 파일에 쓰기
            # with open(os.path.join(current_dir, "sample.txt"), "w") as f:
            with open("C:\Users\SSAFY\Desktop\Close_at_Hand\S10P22E207\embedded\MagicMirror\modules\MMM-Face-Recognition-SMAI\sample.txt", "w") as f:
                f.write(name)

            # 시간 지연
            time.sleep(15)

        # 얼굴 인식 실패 시 기본값으로 파일에 쓰기
        # if not face_encodings:
        if not face_locations:
            # with open(os.path.join(current_dir, "sample.txt"), "w") as f:
            with open("C:\Users\SSAFY\Desktop\Close_at_Hand\S10P22E207\embedded\MagicMirror\modules\MMM-Face-Recognition-SMAI\sample.txt", "w") as f:
                f.write(name)

def main():
    parser = argparse.ArgumentParser(
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument(
        '--model',
        help='Name of the pose landmarker model bundle.',
        required=False,
        default='pose_landmarker.task')
    parser.add_argument(
        '--num_poses',
        help='Max number of poses that can be detected by the landmarker.',
        required=False,
        default=1)
    parser.add_argument(
        '--min_pose_detection_confidence',
        help='The minimum confidence score for pose detection to be considered '
             'successful.',
        required=False,
        default=0.5)
    parser.add_argument(
        '--min_pose_presence_confidence',
        help='The minimum confidence score of pose presence score in the pose '
             'landmark detection.',
        required=False,
        default=0.5)
    parser.add_argument(
        '--min_tracking_confidence',
        help='The minimum confidence score for the pose tracking to be '
             'considered successful.',
        required=False,
        default=0.5)
    parser.add_argument(
        '--output_segmentation_masks',
        help='Set this if you would also like to visualize the segmentation '
             'mask.',
        required=False,
        action='store_true')
    parser.add_argument(
        '--width',
        help='Width of frame to capture from camera.',
        required=False,
        default=1280)
    parser.add_argument(
        '--height',
        help='Height of frame to capture from camera.',
        required=False,
        default=960)
    args = parser.parse_args()

    # 옷 입히기 기능을 위한 스레드 생성 및 실행
    dressing_thread = threading.Thread(target=AR_Fitting, args=(
        args.model, int(args.num_poses), args.min_pose_detection_confidence,
        args.min_pose_presence_confidence, args.min_tracking_confidence,
        args.output_segmentation_masks,
        args.width, args.height
        ))
    dressing_thread.daemon = True  # 프로그램 종료 시 스레드도 종료되도록 설정
    dressing_thread.start()

    # 얼굴 인식 기능을 위한 스레드 생성 및 실행
    face_recognition_thread = threading.Thread(target=face_recognition)
    face_recognition_thread.daemon = True
    face_recognition_thread.start()

    dressing_thread.join()
    face_recognition_thread.join()


if __name__ == '__main__':
    main()
