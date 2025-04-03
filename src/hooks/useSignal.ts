import { useEffect, useState } from "react";

type SignalColor = "red" | "yellow" | "green";

const SIGNAL_TIMING = {
  red: 5000,
  yellow: 2000,
  green: 5000,
} as const;

export const useSignal = () => {
  const [currentColor, setCurrentColor] = useState<SignalColor>("red");

  useEffect(() => {
    const changeSignal = () => {
      setCurrentColor((prev) => {
        switch (prev) {
          case "red":
            return "green";
          case "green":
            return "yellow";
          case "yellow":
            return "red";
          default:
            return "red";
        }
      });
    };

    const timer = setInterval(changeSignal, SIGNAL_TIMING[currentColor]);

    return () => clearInterval(timer);
  }, [currentColor]);

  const getRemainingSeconds = () => {
    return Math.ceil(SIGNAL_TIMING[currentColor] / 1000);
  };

  return {
    currentColor,
    remainingSeconds: getRemainingSeconds(),
    SIGNAL_TIMING,
  };
};
