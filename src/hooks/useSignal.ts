import { useState } from "react";

type SignalColor = "red" | "yellow" | "green";

interface UseSignalReturn {
  signal: SignalColor;
  handleChangeSignal: () => void;
}

export const useSignal = (): UseSignalReturn => {
  const [signal, setSignal] = useState<SignalColor>("red");

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

  return { signal, handleChangeSignal };
};
