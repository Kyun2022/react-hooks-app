import { NextPage } from "next";
import Link from "next/link";
import { FaHome, FaRandom } from "react-icons/fa";

import { useStarWars } from "@/hooks/useStarWars";

const Page: NextPage = () => {
  const { character, isLoading, error, handleClickNextCharacter } =
    useStarWars();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-1 text-sm font-medium text-white">
            STAR WARS CHARACTER
          </div>

          <button
            onClick={handleClickNextCharacter}
            className="group mb-8 mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-3 text-white transition-all hover:from-yellow-600 hover:to-yellow-700"
            disabled={isLoading}
          >
            <FaRandom className="transition-transform duration-300 group-hover:rotate-180" />
            <span>{isLoading ? "読み込み中..." : "ランダムキャラクター"}</span>
          </button>

          {error && (
            <div className="mb-4 text-center text-red-400">{error}</div>
          )}

          {character && (
            <div className="space-y-4">
              <h2 className="text-center text-2xl font-bold text-yellow-400">
                {character.name}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">身長</p>
                  <p className="text-white">{character.height} cm</p>
                </div>
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">体重</p>
                  <p className="text-white">{character.mass} kg</p>
                </div>
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">髪の色</p>
                  <p className="text-white">{character.hair_color}</p>
                </div>
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">肌の色</p>
                  <p className="text-white">{character.skin_color}</p>
                </div>
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">目の色</p>
                  <p className="text-white">{character.eye_color}</p>
                </div>
                <div className="rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">誕生年</p>
                  <p className="text-white">{character.birth_year}</p>
                </div>
                <div className="col-span-2 rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm">
                  <p className="text-gray-400">性別</p>
                  <p className="text-white">{character.gender}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
