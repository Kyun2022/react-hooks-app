import { useEffect, useState } from "react";

interface UseTimerReturn {
  formattedTime: string;
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
}

export const useTimer = (): UseTimerReturn => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = (): void => {
    setIsRunning(true);
  };

  const handleStop = (): void => {
    setIsRunning(false);
  };

  const handleReset = (): void => {
    setTime(0);
    setIsRunning(false);
  };

  return {
    formattedTime: formatTime(time),
    isRunning,
    handleStart,
    handleStop,
    handleReset,
  };
};
