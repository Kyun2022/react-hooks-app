import { ChangeEvent, useState } from "react";

type Entry = {
  title: string;
  content: string;
  date: string;
};

type UseMemory = {
  entryList: Entry[];
  title: string;
  content: string;
  filteredDate: string;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleChangeFilterDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickAddEntry: () => void;
};

export const useMemory = (): UseMemory => {
  const [entryList, setEntryList] = useState<Entry[]>([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [filteredDate, setFilteredDate] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleChangeFilterDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredDate(e.target.value);
  };
  const handleClickAddEntry = () => {
    if (!title || !content) return;
    const newEntry = {
      title,
      content,
      date: filteredDate,
    };
    setEntryList((prev) => [...prev, newEntry]);
    setTitle("");
    setContent("");
  };
  return {
    entryList,
    title,
    content,
    filteredDate,
    handleChangeTitle,
    handleChangeContent,
    handleChangeFilterDate,
    handleClickAddEntry,
  };
};
