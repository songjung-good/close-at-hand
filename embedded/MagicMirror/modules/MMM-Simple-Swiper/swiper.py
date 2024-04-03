from time import sleep, time
from gpiozero import DistanceSensor
import os

current_dir = os.path.dirname(os.path.realpath(__file__))
output_file = os.path.join(current_dir, "swipe_result.txt")

sensor = DistanceSensor(echo=18, trigger=17)

last_action_time = None  # 마지막 액션 시간을 추적

try:
    while True:
        if sensor.distance * 100 <= 10:
            with open(output_file, "w") as file:
                file.write("LEAVE_HIDDEN_PAGE")
            last_action_time = time()
        else:
            current_time = time()
            if last_action_time is None or current_time - last_action_time > 300:  # 5분
                with open(output_file, "w") as file:
                    file.write("SHOW_HIDDEN_PAGE")
        sleep(1)
except KeyboardInterrupt:
    print("Script stopped.")
