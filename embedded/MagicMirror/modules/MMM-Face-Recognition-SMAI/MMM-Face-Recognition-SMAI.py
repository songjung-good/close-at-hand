import face_recognition
import numpy as np
import subprocess
import os
import time

# 여러 사진의 파일 경로
image_paths = [
    "/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/public/face1.png",
    "/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/public/face2.png",
    # 여기에 더 많은 이미지 경로를 추가할 수 있습니다.
]

# 각 이미지로부터 얼굴 인코딩을 추출하고 리스트에 저장
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
        with open("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/sample.txt", "w") as f:
            f.write(name)

        # 시간 지연
        time.sleep(15)

    # 얼굴 인식 실패 시 기본값으로 파일에 쓰기
    if not face_encodings:
        with open("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/sample.txt", "w") as f:
            f.write(name)

# import face_recognition
# import cv2
# import numpy as np
# import sys
# import os
# import time

# # 카메라 초기화
# camera = cv2.VideoCapture(0)
# camera.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
# camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)

# # 샘플 이미지를 불러와서 얼굴 인식을 위해 학습
# print("Loading known face image(s)")
# rec_image = face_recognition.load_image_file("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/public/face.png")
# rec_face_encoding = face_recognition.face_encodings(rec_image)[0]

# # 변수 초기화
# face_locations = []
# face_encodings = []

# id_check = 0

# while True:
#     print("Capturing image.")
#     # 카메라에서 이미지 캡처
#     ret, frame = camera.read()
#     if not ret:
#         print("Failed to grab frame")
#         break
#     # OpenCV는 BGR 이미지를 캡처하므로 RGB로 변환
#     rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#     # 현재 프레임에서 모든 얼굴과 얼굴 인코딩 찾기
#     face_locations = face_recognition.face_locations(rgb_frame)
#     print("Found {} faces in image.".format(len(face_locations)))
#     face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
    
#     face_id = "Guest"

#     # 프레임에 발견된 각 얼굴이 알려진 얼굴인지 확인
#     for face_encoding in face_encodings:
#         # 얼굴이 알려진 얼굴과 일치하는지 확인
#         match = face_recognition.compare_faces([rec_face_encoding], face_encoding)
#         name = "<Unknown Person>"
   
#         if id_check == 0:
#             for file in os.listdir("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/public"):
#                 if file.endswith("-id.png"):
#                     face_id = file.replace('-', ' ').split(' ')[0]

#         if match[0]:
#             name = face_id

#         print("Person Detected: {}!".format(name))
#         f = open("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/sample.txt", "w")
#         f.write(name)
#         f.close()
#         # 사용자가 거울에서 로그오프되기 전 시간 지연
#         time.sleep(15)
        
#     # 얼굴 인식 실패 시 기본값으로 파일에 쓰기
#     if not face_encodings:
#         f = open("/home/damaskrose/MagicMirror/modules/MMM-Face-Recognition-SMAI/sample.txt", "w")
#         f.write(face_id)
#         f.close()

# # 정리 작업
# camera.release()
# cv2.destroyAllWindows()
