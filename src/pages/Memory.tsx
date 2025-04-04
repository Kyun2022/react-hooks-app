import { NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import Button from "@/components/common/parts/Button";
import { useMemory } from "@/hooks/useMemory";

const Page: NextPage = () => {
  const {
    entryList,
    title,
    content,
    date,
    filteredDate,
    filteredEntries,
    handleChangeTitle,
    handleChangeContent,
    handleChangeDate,
    handleChangeFilterDate,
    handleClickAddEntry,
  } = useMemory();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
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
          日記アプリ
        </h2>

        {/* タイトル・コンテンツの入力フォーム */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                タイトル
              </label>
              <input
                id="title"
                type="text"
                placeholder="タイトルを入力してください"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
                onChange={handleChangeTitle}
                value={title}
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                内容
              </label>
              <textarea
                id="content"
                placeholder="内容を入力してください"
                className="h-32 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
                onChange={handleChangeContent}
                value={content}
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                日付
              </label>
              <input
                id="date"
                type="date"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-purple-500 focus:outline-none"
                onChange={handleChangeDate}
                value={date}
                required
              />
            </div>
          </div>
          <Button
            label="追加"
            variant="primary"
            className="mt-6 w-full"
            onClick={handleClickAddEntry}
          />
        </div>

        {/* 日付フィルター */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              日付フィルター
            </span>
            <input
              type="date"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none transition-colors focus:border-purple-500"
              onChange={handleChangeFilterDate}
              value={filteredDate}
            />
          </div>

          {/* 日記一覧 */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              日記一覧
              {filteredDate && (
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredDate}の記録)
                </span>
              )}
            </h2>
            <ul className="mt-4 space-y-4">
              {filteredEntries.map((entry, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4 transition-all hover:border-purple-100 hover:bg-purple-50"
                >
                  <h3 className="font-medium text-gray-800">{entry.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{entry.content}</p>
                  <p className="mt-3 text-xs font-medium text-purple-600">
                    {entry.date}
                  </p>
                </li>
              ))}
              {filteredDate && filteredEntries.length === 0 && (
                <li className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-center text-sm text-gray-500">
                  この日付の記録はありません
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
