import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

import { usePokemon } from "@/hooks/usePokemon";

const Page: NextPage = () => {
  const {
    query,
    error,
    pokemon,
    isLoading,
    handleSetQuery,
    handleSearchPokemon,
  } = usePokemon();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 py-12">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-1 text-sm font-medium text-white">
            POKEMON SEARCH
          </div>

          {/* 検索フォーム */}
          <div className="mt-4">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await handleSearchPokemon();
              }}
              className="relative"
            >
              <input
                type="text"
                placeholder="ポケモンの名前を入力..."
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-24 text-gray-700 outline-none transition-all focus:border-rose-400"
                value={query}
                onChange={handleSetQuery}
              />
              <button
                type="submit"
                className="group absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 px-4 py-1.5 text-sm font-medium text-white transition-all hover:shadow-lg"
                disabled={isLoading}
              >
                <FaSearch className="transition-all duration-300 group-hover:scale-110" />
                検索
              </button>
            </form>
            {error && (
              <p className="mt-2 text-center text-sm text-red-500">{error}</p>
            )}
          </div>

          {/* ポケモン情報 */}
          {pokemon && (
            <div className="mt-8 overflow-hidden rounded-xl border-2 border-gray-100 bg-gray-50 p-6">
              <h2 className="text-center text-2xl font-bold capitalize text-gray-800">
                {pokemon.name}
              </h2>
              <div className="mt-4 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-rose-200 to-red-200 opacity-50 blur-xl" />
                  <div className="relative size-48">
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-gray-600">
                    タイプ:{" "}
                    <span className="font-medium text-gray-900">
                      {pokemon.types.map((type) => type.type.name).join(", ")}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    高さ:{" "}
                    <span className="font-medium text-gray-900">
                      {pokemon.height / 10}m
                    </span>
                  </p>
                  <p className="text-gray-600">
                    重さ:{" "}
                    <span className="font-medium text-gray-900">
                      {pokemon.weight / 10}kg
                    </span>
                  </p>
                  {pokemon.description && (
                    <p className="mt-4 rounded-lg bg-white p-4 text-gray-600 shadow-inner">
                      {pokemon.description}
                    </p>
                  )}
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
