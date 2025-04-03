import { NextPage } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { useSignal } from "@/hooks/useSignal";

const Page: NextPage = () => {
  const { signal, handleChangeSignal } = useSignal();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-1 text-sm font-medium text-white">
            SIGNAL
          </div>

          <div className="mt-4">
            <div className="mx-auto flex h-80 w-32 flex-col items-center justify-between rounded-2xl bg-gray-800 p-4">
              <div
                className={`size-20 rounded-full ${
                  signal === "red"
                    ? "bg-red-500 shadow-lg shadow-red-500/50"
                    : "bg-red-950"
                }`}
              />
              <div
                className={`size-20 rounded-full ${
                  signal === "yellow"
                    ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                    : "bg-yellow-950"
                }`}
              />
              <div
                className={`size-20 rounded-full ${
                  signal === "green"
                    ? "bg-green-500 shadow-lg shadow-green-500/50"
                    : "bg-green-950"
                }`}
              />
            </div>

            <button
              onClick={handleChangeSignal}
              className="mx-auto mt-8 block rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 font-medium text-white transition-all hover:from-gray-700 hover:to-gray-800"
            >
              信号を切り替える
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
