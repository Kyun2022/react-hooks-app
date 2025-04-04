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
    setUserAge(e.target.value);
  };

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddUser = () => {
    const newUser: User = {
      name: userName,
      age: Number(userAge),
    };

    if (userName === "" || Number(userAge) === 0) return;
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
