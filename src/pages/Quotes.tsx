import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaPause, FaPlay, FaRandom } from "react-icons/fa";

import { useQuotes } from "@/hooks/useQuotes";

const Page: NextPage = () => {
  const {
    quote,
    error,
    isLoading,
    isAutoRefresh,
    handleFetchQuote,
    toggleAutoRefresh,
  } = useQuotes();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 py-12">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-1 text-sm font-medium text-white">
            QUOTES
          </div>

          <div className="mt-4">
            <div className="space-y-4 text-center">
              {error ? (
                <div className="text-red-500">{error}</div>
              ) : quote ? (
                <div>
                  <p className="text-xl font-medium text-gray-700">
                    {quote.text}
                  </p>
                  <p className="text-gray-500">- {quote.author}</p>
                </div>
              ) : null}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handleFetchQuote}
                disabled={isLoading}
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-3 font-medium text-white transition-all hover:from-yellow-700 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaRandom className="transition-transform duration-300 group-hover:rotate-180" />
                {isLoading ? "読み込み中..." : "ランダムな名言を表示"}
              </button>

              <button
                onClick={toggleAutoRefresh}
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 font-medium text-white transition-all hover:from-gray-700 hover:to-gray-800"
              >
                {isAutoRefresh ? (
                  <div className="flex items-center gap-2">
                    <FaPause className="transition-transform duration-300 group-hover:scale-110" />
                    自動更新を停止
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaPlay className="transition-transform duration-300 group-hover:scale-110" />
                    自動更新を開始
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
