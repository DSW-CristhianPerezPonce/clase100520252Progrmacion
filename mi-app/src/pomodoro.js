import { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => setSeconds(s => s - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const formatTime = s => `${Math.floor(s / 60)}:${s % 60 < 10 ? '0' : ''}${s % 60}`;

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <h2>{formatTime(seconds)}</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={() => setSeconds(25 * 60)}>Reiniciar</button>
    </div>
  );
}

export default PomodoroTimer;