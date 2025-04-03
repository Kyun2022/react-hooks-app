import { useState } from "react";

type UseQuiz = {
  userChoice: string;
  result: string;
  handleClick: (choice: string) => void;
  handleSubmit: () => void;
};
const CORRECT_ANSWER = "ライブラリ";

export const useQuiz = (): UseQuiz => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (choice: string) => {
    setUserChoice(choice);
  };

  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult("正解!");
    } else {
      setResult("不正解!");
    }
  };

  return {
    userChoice,
    result,
    handleClick,
    handleSubmit,
  };
};
