import time
import serial

serial_comm = serial.Serial("COM3", 9600)
serial_comm.timeout = 1

while True:
    i = input("Input (dispense/spook/tune): ").strip()
    if i == "done":
        print("finished program")
        break
    serial_comm.write(i.encode())
    time.sleep(0.5)
    print(serial_comm.readline().decode("ascii"))

serial_comm.close()

