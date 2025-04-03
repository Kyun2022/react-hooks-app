import { NextPage } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { useSignal } from "@/hooks/useSignal";

const Page: NextPage = () => {
  const { currentColor, remainingSeconds } = useSignal();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-gray-100">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="relative rounded-2xl bg-gray-800 p-12 shadow-2xl">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-6 py-1 text-sm font-medium text-white">
          TRAFFIC SIGNAL
        </div>
        <div className="flex flex-col gap-6">
          {/* 赤信号 */}
          <div
            className={`size-24 rounded-full transition-all duration-500 ${
              currentColor === "red"
                ? "bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                : "bg-red-950"
            }`}
          />
          {/* 黄信号 */}
          <div
            className={`size-24 rounded-full transition-all duration-500 ${
              currentColor === "yellow"
                ? "bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.7)]"
                : "bg-yellow-950"
            }`}
          />
          {/* 青信号 */}
          <div
            className={`size-24 rounded-full transition-all duration-500 ${
              currentColor === "green"
                ? "bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.7)]"
                : "bg-green-950"
            }`}
          />
        </div>
        {/* タイマー表示 */}
        <div className="mt-6 text-center">
          <div className="font-mono text-2xl font-bold text-white">
            {remainingSeconds}
          </div>
          <div className="text-sm text-gray-400">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
