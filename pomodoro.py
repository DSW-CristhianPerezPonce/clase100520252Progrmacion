import time

def pomodoro_timer(work_duration=25, break_duration=5, cycles=4): #funcion de la cuenta regresiva
    for i in range(1,cycles+1):
        print(f"Pomodoro {i} - A trabajar durante {work_duration} minutos.")
        time.sleep(work_duration * 60)  # Convert minutes to seconds
        print ("¡Tiempo de descanso corto!")
        time.sleep(break_duration * 60) # Convert minutes to seconds
    print("¡Tiempo de descanso largo!")
    time.sleep(work_duration * 60) 

pomodoro_timer() #esa es la funcion que se ejecuta

     