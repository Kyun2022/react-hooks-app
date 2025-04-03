import { useState } from "react";

type UseCountUpProps = {
  count: number;
  handleClick: () => void;
};

export const useCountUp = (): UseCountUpProps => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return { count, handleClick };
};
