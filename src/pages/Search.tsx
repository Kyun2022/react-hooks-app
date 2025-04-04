import { NextPage } from "next";

import Button from "@/components/common/parts/Button";
import { useSearch } from "@/hooks/useSearch";

import type { User } from "@/hooks/useSearch";

const Page: NextPage = () => {
  const {
    userName,
    userAge,
    query,
    filteredUsers,
    handleChangeUserName,
    handleChangeUserAge,
    handleSearchUser,
    handleAddUser,
  } = useSearch();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-center text-2xl font-bold">ユーザー検索アプリ</h2>

          {/* ユーザー追加フォーム */}
          <div className="mt-8 text-center text-2xl ">
            <h3 className="text-base">ユーザー追加フォーム</h3>
            <input
              type="text"
              placeholder="名前を入力してください"
              className="mt-4 w-full border px-3 py-2 text-sm placeholder:text-center"
              onChange={handleChangeUserName}
              value={userName}
            />
            <input
              type="text"
              placeholder="年齢を入力してください"
              className="mt-2 w-full border px-3 py-2 text-sm placeholder:text-center"
              onChange={handleChangeUserAge}
              value={userAge}
            />
          </div>
          <Button
            label="ユーザー追加"
            variant="primary"
            className="mx-auto mt-2"
            onClick={handleAddUser}
          />

          {/* ユーザー検索フォーム*/}
          <div className="mt-12">
            <h3 className="text-center text-base">検索フォーム</h3>
            <input
              type="text"
              placeholder="ユーザー検索をしてください"
              className="mt-4 w-full rounded-md border px-3 py-2 text-sm placeholder:text-center"
              onChange={handleSearchUser}
              value={query}
            />
          </div>

          {/* ユーザー一覧*/}
          <ul className="mt-4">
            {filteredUsers.map((user: User, index: number) => (
              <li
                key={index}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>{user.name}</span>
                <span>{user.age} 歳</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
