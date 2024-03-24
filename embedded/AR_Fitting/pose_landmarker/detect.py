import argparse
import sys
import time
import cv2
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

# picamera2 라이브러리 사용
def run(model: str, num_poses: int,
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
        image = cv2.flip(image, 1)

        # 이미지를 RGB로 변환
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_image)

        # 비동기 탐지 실행
        detector.detect_async(mp_image, time.time_ns() // 1_000_000)

        # FPS 표시
        fps_text = 'FPS = {:.1f}'.format(FPS)
        text_location = (left_margin, row_size)
        current_frame = image
        cv2.putText(current_frame, fps_text, text_location,
                    cv2.FONT_HERSHEY_DUPLEX,
                    font_size, text_color, font_thickness, cv2.LINE_AA)

        if len(current_frame.shape) == 2:
            current_frame = cv2.cvtColor(current_frame, cv2.COLOR_GRAY2BGR)
        elif current_frame.shape[2] == 4:
            current_frame = cv2.cvtColor(current_frame, cv2.COLOR_RGBA2BGR)

        # 탐지 결과가 있을 경우 랜드마크를 그림
        if DETECTION_RESULT:
            for pose_landmarks in DETECTION_RESULT.pose_landmarks:
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

        if (output_segmentation_masks and DETECTION_RESULT):
            if DETECTION_RESULT.segmentation_masks is not None:
                segmentation_mask = DETECTION_RESULT.segmentation_masks[0].numpy_view()
                mask_image = np.zeros(image.shape, dtype=np.uint8)
                mask_image[:] = mask_color
                condition = np.stack((segmentation_mask,) * 3, axis=-1) > 0.1
                visualized_mask = np.where(condition, mask_image, current_frame)
                current_frame = cv2.addWeighted(current_frame, overlay_alpha,
                                                visualized_mask, overlay_alpha,
                                                0)

        # 최종 이미지 표시
        cv2.imshow('Mediapipe Feed', current_frame)
        
        # 'q'를 누르면 루프 종료
        if cv2.waitKey(5) & 0xFF == ord('q'):
            break

    # 자원 해제
    cv2.destroyAllWindows()
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
