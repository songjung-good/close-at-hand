import argparse
import sys
import time
import cv2 as cv
import mediapipe as mp
import numpy as np
from picamera2 import Picamera2

from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe.framework.formats import landmark_pb2

mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
COUNTER, FPS = 0, 0
START_TIME = time.time()
DETECTION_RESULT = None

top_image_path = 'clothes/Blue_T.png'
pants_image_path = 'clothes/blue_pants.png'

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
def run(model: str, num_poses: int,
        min_pose_detection_confidence: float,
        min_pose_presence_confidence: float, min_tracking_confidence: float,
        output_segmentation_masks: bool,
        width: int, height: int) -> None:
    
    # 상의와 하의 이미지를 불러옵니다.
    top_image = load_and_convert_image(top_image_path, color_space='RGBA')
    pants_image = load_and_convert_image(pants_image_path, color_space='RGBA')

    top_distance, _, _ = find_top_extremes(top_image)
    pants_distance, _, _ = find_pants_extremes(pants_image)

    # Picamera2 객체 생성 및 카메라 설정
    picam2 = Picamera2()
    preview_config = picam2.create_preview_configuration(main={"size": (width, height)})
    picam2.configure(preview_config)
    picam2.start()

    # 시각화에 사용될 파라미터 설정
    row_size = 50  # 픽셀 단위
    left_margin = 24  # 픽셀 단위
    text_color = (0, 0, 0)  # 검정색
    font_size = 1
    font_thickness = 1
    fps_avg_frame_count = 10
    overlay_alpha = 0.5
    mask_color = (100, 100, 0)  # 청록색

    # 결과 저장 및 FPS 계산을 위한 함수
    def save_result(result: vision.PoseLandmarkerResult,
                    unused_output_image: mp.Image, timestamp_ms: int):
        global FPS, COUNTER, START_TIME, DETECTION_RESULT

        # FPS 계산
        if COUNTER % fps_avg_frame_count == 0:
            FPS = fps_avg_frame_count / (time.time() - START_TIME)
            START_TIME = time.time()

        # 탐지 결과 저장
        DETECTION_RESULT = result
        COUNTER += 1

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

        # FPS 표시
        fps_text = 'FPS = {:.1f}'.format(FPS)
        text_location = (left_margin, row_size)
        current_frame = image
        cv.putText(current_frame, fps_text, text_location,
                    cv.FONT_HERSHEY_DUPLEX,
                    font_size, text_color, font_thickness, cv.LINE_AA)

        if len(current_frame.shape) == 2:
            current_frame = cv.cvtColor(current_frame, cv.COLOR_GRAY2BGR)
        elif current_frame.shape[2] == 4:
            current_frame = cv.cvtColor(current_frame, cv.COLOR_RGBA2BGR)

        # 탐지 결과가 있을 경우 랜드마크를 그림
        if DETECTION_RESULT and len(DETECTION_RESULT.pose_landmarks) > 0:
            for pose_landmarks in DETECTION_RESULT.pose_landmarks:
                # print('TEST', pose_landmarks[0])
                pose_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
                pose_landmarks_proto.landmark.extend([
                    landmark_pb2.NormalizedLandmark(x=landmark.x, y=landmark.y,
                                                    z=landmark.z) for landmark
                    in pose_landmarks
                ])
                
                mp_drawing.draw_landmarks(
                    current_frame,
                    pose_landmarks_proto,
                    mp_pose.POSE_CONNECTIONS,
                    mp_drawing_styles.get_default_pose_landmarks_style())
            
            # 하의
            if DETECTION_RESULT.pose_landmarks[0][23] and DETECTION_RESULT.pose_landmarks[0][24]:
                left_hip, right_hip = DETECTION_RESULT.pose_landmarks[0][23], DETECTION_RESULT.pose_landmarks[0][24]
                left_hip_x, left_hip_y = int(left_hip.x * width), int(left_hip.y * height)
                right_hip_x, right_hip_y = int(right_hip.x * width), int(right_hip.y * height)
                hip_width = np.sqrt((right_hip_x - left_hip_x) ** 2 + (right_hip_y - left_hip_y) ** 2)
                scale_factor_pants = calculate_scale_factor_for_pants(hip_width, pants_distance)
                overlay_position_pants = ((left_hip_x + right_hip_x) // 2 - (pants_image.shape[1] * scale_factor_pants) // 2, left_hip_y - (hip_width * scale_factor_pants))
                current_frame = overlay_clothing_on_person(current_frame, pants_image, overlay_position_pants, scale_factor_pants, current_frame.shape)

            # 상의
            if DETECTION_RESULT.pose_landmarks[0][11] and DETECTION_RESULT.pose_landmarks[0][12]:
                left_shoulder, right_shoulder = DETECTION_RESULT.pose_landmarks[0][11], DETECTION_RESULT.pose_landmarks[0][12]
                left_shoulder_x, left_shoulder_y = int(left_shoulder.x * width), int(left_shoulder.y * height)
                right_shoulder_x, right_shoulder_y = int(right_shoulder.x * width), int(right_shoulder.y * height)
                shoulder_width = np.sqrt((right_shoulder_x - left_shoulder_x) ** 2 + (right_shoulder_y - left_shoulder_y) ** 2)
                scale_factor_top = calculate_scale_factor_for_top(shoulder_width, top_distance)
                overlay_position_top = ((left_shoulder_x + right_shoulder_x) // 2 - (top_image.shape[1] * scale_factor_top) // 2, min(left_shoulder_y, right_shoulder_y) - (shoulder_width * scale_factor_top) / 2)
                current_frame = overlay_clothing_on_person(current_frame, top_image, overlay_position_top, scale_factor_top, current_frame.shape)

        if (output_segmentation_masks and DETECTION_RESULT):
            if DETECTION_RESULT.segmentation_masks is not None:
                segmentation_mask = DETECTION_RESULT.segmentation_masks[0].numpy_view()
                mask_image = np.zeros(image.shape, dtype=np.uint8)
                mask_image[:] = mask_color
                condition = np.stack((segmentation_mask,) * 3, axis=-1) > 0.1
                visualized_mask = np.where(condition, mask_image, current_frame)
                current_frame = cv.addWeighted(current_frame, overlay_alpha,
                                                visualized_mask, overlay_alpha,
                                                0)

        # 최종 이미지 표시
        cv.imshow('Mediapipe Feed', current_frame)
        
        # 'q'를 누르면 루프 종료
        if cv.waitKey(5) & 0xFF == ord('q'):
            break

    # 자원 해제
    cv.destroyAllWindows()
    picam2.stop()

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

    run(args.model, int(args.num_poses), args.min_pose_detection_confidence,
        args.min_pose_presence_confidence, args.min_tracking_confidence,
        args.output_segmentation_masks,
        args.width, args.height)


if __name__ == '__main__':
    main()
