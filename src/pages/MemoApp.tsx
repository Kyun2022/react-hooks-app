import { NextPage } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { useMemoApp } from "@/hooks/useMemoApp";

const Page: NextPage = () => {
  const {
    memoList,
    memoText,
    handleChangeMemoText,
    handleAddMemo,
    handleDeleteMemo,
  } = useMemoApp();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 py-12">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-1 text-sm font-medium text-white">
            MEMO APP
          </div>

          <div className="mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMemo();
              }}
              className="space-y-4"
            >
              <textarea
                value={memoText}
                onChange={handleChangeMemoText}
                placeholder="メモを入力..."
                className="h-32 w-full resize-none rounded-xl border-2 border-gray-200 p-4 text-gray-700 outline-none transition-all focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-center font-medium text-white transition-all hover:from-blue-700 hover:to-blue-800"
              >
                追加
              </button>
            </form>

            <div className="mt-8 space-y-4">
              {memoList.map((memo, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg border border-gray-200 p-4"
                >
                  <p className="text-gray-700">{memo}</p>
                  <button
                    onClick={() => handleDeleteMemo(index)}
                    className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white transition-all hover:bg-red-600 group-hover:block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
