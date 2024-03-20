import cv2

# 0은 일반적으로 기본 웹캠을 나타냅니다. 웹캠이 여러 개인 경우 1, 2 등으로 변경해 보세요.
cap = cv2.VideoCapture(0)

#if not cap.isOpened():
#    print("웹캠을 열 수 없습니다.")
#else:
#    print("웹캠이 성공적으로 열렸습니다.")
    
while True:
    ret, frame = cap.read()
    
    if not ret:
        print("Can't receive frame")
        break
        
    cv2.imshow('frame', frame)
    
    if cv2.waitKey(1) == ord('q'):
        break
        
cap.release()
cv2.destroyAllWindows()

