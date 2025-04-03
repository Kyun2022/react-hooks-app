import { useState } from "react";

interface UseMemoAppReturn {
  memoList: string[];
  memoText: string;
  handleChangeMemoText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMemo: () => void;
  handleDeleteMemo: (index: number) => void;
}

export const useMemoApp = (): UseMemoAppReturn => {
  const [memoList, setMemoList] = useState<string[]>([]);
  const [memoText, setMemoText] = useState("");

  const handleChangeMemoText = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (!e.target) return;
    setMemoText(e.target.value);
  };

  const handleAddMemo = (): void => {
    if (memoText.trim() === "") return;
    setMemoList((prevState) => [...prevState, memoText.trim()]);
    setMemoText("");
  };

  const handleDeleteMemo = (index: number): void => {
    if (index < 0 || index >= memoList.length) return;
    setMemoList((prevState) => prevState.filter((_, i) => i !== index));
  };

  return {
    memoList,
    memoText,
    handleChangeMemoText,
    handleAddMemo,
    handleDeleteMemo,
  };
};
