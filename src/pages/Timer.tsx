import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaPause, FaPlay, FaRedo } from "react-icons/fa";

import { useTimer } from "@/hooks/useTimer";

const Page: NextPage = () => {
  const { isRunning, formattedTime, handleReset, toggleTimer } = useTimer();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-md">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-6 py-1 text-sm font-medium text-white">
            STOPWATCH
          </div>

          {/* タイマー表示 */}
          <div className="mb-8 mt-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-center text-7xl font-bold tracking-wider text-transparent">
            {formattedTime}
          </div>

          {/* コントロールボタン */}
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className={`group relative flex size-16 items-center justify-center rounded-full transition-all duration-300 ${
                isRunning
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              <div className="absolute -inset-1 animate-pulse rounded-full bg-current opacity-20" />
              {isRunning ? (
                <FaPause className="text-2xl text-white" />
              ) : (
                <FaPlay className="text-2xl text-white" />
              )}
            </button>

            <button
              onClick={handleReset}
              className="group flex size-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300"
            >
              <FaRedo className="text-2xl text-gray-600 transition-transform duration-300 group-hover:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
