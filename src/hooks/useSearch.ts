import { useMemo, useState } from "react";

export type User = {
  name: string;
  age: number;
};

type UseSearch = {
  userName: string;
  userAge: string;
  query: string;
  users: User[];
  filteredUsers: User[];
  handleChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
};

const INITIAL_USERS: User[] = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 45 },
  { name: "Dave", age: 52 },
];

export const useSearch = (): UseSearch => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 空文字列または有効な数値のみを許可
    if (value === "" || (Number(value) >= 0 && Number(value) <= 150)) {
      setUserAge(value);
    }
  };

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddUser = () => {
    const age = Number(userAge);
    if (userName.trim() === "" || !age || age <= 0 || age > 150) return;

    const newUser: User = {
      name: userName.trim(),
      age: age,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserName("");
    setUserAge("");
  };

  const filteredUsers = useMemo<User[]>(
    () =>
      users.filter((user: User) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
      }),
    [query, users],
  );

  return {
    userName,
    userAge,
    query,
    users,
    filteredUsers,
    handleChangeUserName,
    handleChangeUserAge,
    handleSearchUser,
    handleAddUser,
  };
};
