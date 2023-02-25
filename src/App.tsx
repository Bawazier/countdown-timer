import { useState, useEffect, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const convertTimeToInitialValue = (formattedTime: string): number => {
  const [hours, minutes, seconds] = formattedTime.split(':').map(Number);
  const totalMilliseconds = (hours * 60 + minutes) * 60 + seconds;
  return totalMilliseconds;
};

function App(): JSX.Element {
  const [seconds, setSeconds] = useState(900);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState('');
  const [optionTime, setOptionTime] = useState([
    '00:05:00',
    '00:15:00',
    '00:35:00',
  ]);

  useEffect(() => {
    if (seconds > 0) {
      let intervalId: NodeJS.Timer;
      if (isRunning) {
        intervalId = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
      return () => clearInterval(intervalId);
    }
  }, [seconds, isRunning]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setSeconds(900);
  }, []);

  const handleSetTime = useCallback(() => {
    const initialValue = convertTimeToInitialValue(time);
    console.log({ initialValue, time });
    setSeconds(initialValue);
  }, [time]);

  const onChangeInputTimer = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(e.target.value);
    },
    []
  );

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
      <div>
        <input
          type="text"
          defaultValue="00:15:00"
          value={time}
          onChange={onChangeInputTimer}
        />
        <button onClick={handleSetTime}>Set Time</button>
      </div>
      <select>
        {optionTime.map((item) => (
          <option onClick={() => setTime(item)}>{item}</option>
        ))}
      </select>
      <div>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
