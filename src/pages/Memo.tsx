import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaPlus, FaTrash } from "react-icons/fa";

import { useMemoApp } from "@/hooks/useMemoApp";

const Page: NextPage = () => {
  const {
    memoText,
    memoList,
    handleChangeMemoText,
    handleAddMemo,
    handleDeleteMemo,
  } = useMemoApp();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-100 py-12">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-1 text-sm font-medium text-white">
            MEMO APP
          </div>

          {/* 入力フォーム */}
          <div className="mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMemo();
              }}
              className="relative"
            >
              <input
                type="text"
                placeholder="新しいメモを入力..."
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-24 text-gray-700 outline-none transition-all focus:border-cyan-400"
                value={memoText}
                onChange={handleChangeMemoText}
              />
              <button
                type="submit"
                className="group absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-all hover:shadow-lg"
              >
                <FaPlus className="transition-transform duration-300 group-hover:rotate-90" />
                追加
              </button>
            </form>
          </div>

          {/* メモリスト */}
          <div className="mt-8 space-y-4">
            {memoList.map((memo, index) => (
              <div
                key={index}
                className="group flex items-center justify-between rounded-xl border-2 border-gray-100 bg-gray-50 p-4 transition-all hover:border-cyan-200 hover:bg-cyan-50"
              >
                <span className="text-gray-700">{memo}</span>
                <button
                  onClick={() => handleDeleteMemo(index)}
                  className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all hover:bg-red-100 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
