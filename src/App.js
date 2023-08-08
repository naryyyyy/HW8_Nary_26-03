import { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}

export default Timer;
