import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { FaHome, FaRandom } from "react-icons/fa";

import { useQuotes } from "@/hooks/useQuotes";

const Page: NextPage = () => {
  const { quote, error, isLoading, handleFetchQuote } = useQuotes();

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        await handleFetchQuote();
      } catch (err) {
        console.error("名言の取得に失敗しました:", err);
      }
    };
    void fetchQuote();
  }, []);

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
            {error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <div className="space-y-4 text-center">
                {quote && (
                  <>
                    <p className="text-xl font-medium text-gray-700">
                      {quote.text}
                    </p>
                    <p className="text-gray-500">- {quote.author}</p>
                  </>
                )}
              </div>
            )}

            <button
              onClick={handleFetchQuote}
              disabled={isLoading}
              className="group mx-auto mt-8 flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-3 font-medium text-white transition-all hover:from-yellow-700 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaRandom className="transition-transform duration-300 group-hover:rotate-180" />
              {isLoading ? "読み込み中..." : "ランダムな名言を表示"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
