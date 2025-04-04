import { NextPage } from "next";
import Link from "next/link";
import {
  FaBook,
  FaClock,
  FaHourglassHalf,
  FaJedi,
  FaQuestion,
  FaQuoteRight,
  FaSearch,
  FaStickyNote,
  FaTasks,
  FaTrafficLight,
} from "react-icons/fa";
import { SiPokemon } from "react-icons/si";

const Page: NextPage = () => {
  const apps = [
    { name: "Todoアプリ", path: "/Todo", icon: <FaTasks /> },
    { name: "メモアプリ", path: "/Memo", icon: <FaStickyNote /> },
    { name: "ポケモン図鑑", path: "/Pokemon", icon: <SiPokemon /> },
    { name: "Star Wars API", path: "/StarWars", icon: <FaJedi /> },
    { name: "時計", path: "/Clock", icon: <FaClock /> },
    { name: "タイマー", path: "/Timer", icon: <FaHourglassHalf /> },
    { name: "信号機", path: "/Signal", icon: <FaTrafficLight /> },
    {
      name: "名言ジェネレーター",
      path: "/Quotes",
      icon: <FaQuoteRight />,
    },
    { name: "クイズアプリ", path: "/Quiz", icon: <FaQuestion /> },
    { name: "ユーザー検索", path: "/Search", icon: <FaSearch /> },
    { name: "日記アプリ", path: "/Memory", icon: <FaBook /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            アプリ一覧
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.path}
              href={app.path}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="text-3xl text-gray-600 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600">
                  {app.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {app.name}
                </h2>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
