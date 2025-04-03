import { useEffect, useState } from "react";

type Signal = keyof typeof CYCLE;

type UseSignal = {
  signal: Signal;
};

export const CYCLE = { red: "blue", blue: "yellow", yellow: "red" } as const;

export const useSignal = (): UseSignal => {
  const [signal, setSignal] = useState<Signal>("red");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSignal(CYCLE[signal]);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [signal]);

  return { signal };
};
