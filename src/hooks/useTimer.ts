import { useEffect, useState } from "react";

type UseTimer = () => {
  seconds: number;
  isRunning: boolean;
  handleClickToggle: () => void;
  handleClickReset: () => void;
};

export const useTimer: UseTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleClickToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleClickReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };
  return {
    seconds,
    isRunning,
    handleClickToggle,
    handleClickReset,
  };
};
