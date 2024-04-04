import face_recognition
import numpy as np
import subprocess
import os
import time

current_dir = os.path.dirname(os.path.realpath(__file__))

# 여러 얼굴 사진의 파일 경로
image_paths = [
    os.path.join(current_dir, "public/face1.png"),
    os.path.join(current_dir, "public/face2.png"),
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
            with open(os.path.join(current_dir, "sample.txt"), "w") as f:
                f.write(name)
            
            time.sleep(15 * 60)
        else:
            name = "<Unknown Person>"
            print("No known faces detected.")
        
            # 인식 결과를 파일에 쓰기
            with open(os.path.join(current_dir, "sample.txt"), "w") as f:
                f.write(name)

        # 시간 지연
        time.sleep(15)

    # 얼굴 인식 실패 시 기본값으로 파일에 쓰기
    # if not face_encodings:
    if not face_locations:
        with open(os.path.join(current_dir, "sample.txt"), "w") as f:
            f.write(name)