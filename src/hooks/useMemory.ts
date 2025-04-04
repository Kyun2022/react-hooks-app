import { ChangeEvent, useMemo, useState } from "react";

type Entry = {
  title: string;
  content: string;
  date: string;
};

type UseMemory = {
  entryList: Entry[];
  filteredEntries: Entry[];
  title: string;
  content: string;
  date: string;
  filteredDate: string;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleChangeDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeFilterDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickAddEntry: () => void;
};

export const useMemory = (): UseMemory => {
  const [entryList, setEntryList] = useState<Entry[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [filteredDate, setFilteredDate] = useState<string>("");

  const filteredEntries = useMemo(() => {
    if (!filteredDate) return entryList;
    return entryList.filter((entry) => entry.date === filteredDate);
  }, [entryList, filteredDate]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleChangeFilterDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredDate(e.target.value);
  };

  const handleClickAddEntry = () => {
    if (!title || !content || !date) return;
    const newEntry = {
      title,
      content,
      date,
    };
    setEntryList((prev) => [...prev, newEntry]);
    setTitle("");
    setContent("");
    setDate("");
  };

  return {
    entryList,
    filteredEntries,
    title,
    content,
    date,
    filteredDate,
    handleChangeTitle,
    handleChangeContent,
    handleChangeDate,
    handleChangeFilterDate,
    handleClickAddEntry,
  };
};
