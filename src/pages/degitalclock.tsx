import { NextPage } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { useDigitalClock } from "@/hooks/useDigitalClock";

const Page: NextPage = () => {
  const { time } = useDigitalClock();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12">
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-1 text-sm font-medium text-white">
            DIGITAL CLOCK
          </div>

          <div className="mt-4 text-center">
            <div className="text-6xl font-bold text-gray-800">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
