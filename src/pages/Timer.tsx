import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaPlay, FaStop } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

import { useTimer } from "@/hooks/useTimer";

const Page: NextPage = () => {
  const { formattedTime, isRunning, handleStart, handleStop, handleReset } =
    useTimer();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 py-12">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-6 py-1 text-sm font-medium text-white">
            TIMER
          </div>

          <div className="mt-4 text-center">
            <div className="font-mono text-center text-6xl tracking-wider text-gray-800">
              {formattedTime}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {!isRunning ? (
                <button
                  onClick={handleStart}
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-green-700 hover:to-teal-700"
                >
                  <FaPlay className="transition-transform duration-300 group-hover:scale-110" />
                  スタート
                </button>
              ) : (
                <button
                  onClick={handleStop}
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 font-medium text-white transition-all hover:from-red-700 hover:to-rose-700"
                >
                  <FaStop className="transition-transform duration-300 group-hover:scale-110" />
                  ストップ
                </button>
              )}
              <button
                onClick={handleReset}
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 font-medium text-white transition-all hover:from-gray-700 hover:to-gray-800"
              >
                <MdRefresh className="text-xl transition-transform duration-300 group-hover:rotate-180" />
                リセット
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
