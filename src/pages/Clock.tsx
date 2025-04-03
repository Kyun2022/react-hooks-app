import { NextPage } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { useDigitalClock } from "@/hooks/useDigitalClock";

const Page: NextPage = () => {
  const { formattedTime, formattedDate } = useDigitalClock();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="relative rounded-2xl bg-white p-12 shadow-2xl">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-1 text-sm font-medium text-white">
          DIGITAL CLOCK
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-6xl font-bold text-transparent">
            {formattedTime}
          </div>
          <div className="text-center text-sm font-medium text-gray-500">
            {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
