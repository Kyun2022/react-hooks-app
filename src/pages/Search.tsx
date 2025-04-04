import { NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50"
          >
            <FaArrowLeft className="text-gray-400" />
            戻る
          </Link>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">
          ユーザー検索アプリ
        </h2>

        {/* ユーザー追加フォーム */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">ユーザー追加</h3>
          <input
            type="text"
            placeholder="名前を入力してください"
            className="mt-4 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
            onChange={handleChangeUserName}
            value={userName}
          />
          <input
            type="text"
            placeholder="年齢を入力してください"
            className="mt-3 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
            onChange={handleChangeUserAge}
            value={userAge}
          />
          <Button
            label="ユーザー追加"
            variant="primary"
            className="mx-auto mt-4 w-full"
            onClick={handleAddUser}
          />
        </div>

        {/* ユーザー検索フォーム*/}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">ユーザー検索</h3>
          <input
            type="text"
            placeholder="ユーザー名で検索"
            className="mt-4 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
            onChange={handleSearchUser}
            value={query}
          />

          {/* ユーザー一覧*/}
          <ul className="mt-6 divide-y divide-gray-100">
            {filteredUsers.map((user: User, index: number) => (
              <li
                key={index}
                className="flex items-center justify-between py-3 transition-colors hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-800">
                  {user.name}
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {user.age} 歳
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
