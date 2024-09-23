import "./timer.scss"
import { useState, useEffect } from 'react';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120); 

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds : number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return <span className='timer'>time left: {formatTime(timeLeft)}</span>

};

