import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaQuoteLeft, FaRedo } from "react-icons/fa";

import { useQuotes } from "@/hooks/useQuotes";

const Page: NextPage = () => {
  const { currentQuote, getNewQuote } = useQuotes();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-1 text-sm font-medium text-white">
            INSPIRATIONAL QUOTES
          </div>

          <div className="mt-4 space-y-6">
            <div className="relative">
              <FaQuoteLeft className="absolute -left-2 -top-2 text-4xl text-orange-200" />
              <blockquote className="pt-6">
                <p className="text-center text-xl font-medium text-gray-700">
                  {currentQuote.text}
                </p>
                <footer className="mt-4 text-center text-gray-500">
                  <cite className="font-medium not-italic">
                    - {currentQuote.author}
                  </cite>
                </footer>
              </blockquote>
            </div>

            <div className="flex justify-center">
              <button
                onClick={getNewQuote}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-200"
              >
                <FaRedo className="transition-transform duration-300 group-hover:rotate-180" />
                次の名言
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
