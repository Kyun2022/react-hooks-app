import { useEffect, useState } from "react";

type SignalColor = "red" | "yellow" | "green";

interface UseSignalReturn {
  signal: SignalColor;
  isAuto: boolean;
  handleChangeSignal: () => void;
  toggleMode: () => void;
}

export const useSignal = (): UseSignalReturn => {
  const [signal, setSignal] = useState<SignalColor>("red");
  const [isAuto, setIsAuto] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAuto) {
      interval = setInterval(() => {
        handleChangeSignal();
      }, 2000); // 2秒ごとに切り替え
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAuto]);

  const handleChangeSignal = (): void => {
    setSignal((prevState) => {
      switch (prevState) {
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

  const toggleMode = () => {
    setIsAuto((prev) => !prev);
  };

  return { signal, isAuto, handleChangeSignal, toggleMode };
};
