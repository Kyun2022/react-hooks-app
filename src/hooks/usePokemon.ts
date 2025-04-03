import { useState } from "react";

import { Pokemon, PokemonSpecies } from "@/types/api";

interface UsePokemonReturn {
  query: string;
  pokemon: Pokemon | null;
  error: string | null;
  isLoading: boolean;
  handleSetQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchPokemon: () => Promise<void>;
}

export const usePokemon = (): UsePokemonReturn => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value.toLowerCase());
    setError(null);
  };

  const handleSearchPokemon = async (): Promise<void> => {
    if (!query) {
      setError("ポケモンの名前を入力してください");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}`,
      );
      if (!response.ok) {
        throw new Error("ポケモンが見つかりませんでした");
      }
      const pokemonData = (await response.json()) as Pokemon;

      // 説明文を取得
      const speciesResponse = await fetch(pokemonData.species.url);
      if (!speciesResponse.ok) {
        throw new Error("ポケモンの詳細情報の取得に失敗しました");
      }
      const speciesData = (await speciesResponse.json()) as PokemonSpecies;
      const japaneseEntry = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === "ja",
      );

      if (!japaneseEntry) {
        throw new Error("日本語の説明文が見つかりませんでした");
      }

      setPokemon({
        ...pokemonData,
        description: japaneseEntry.flavor_text.replace(/\f/g, " "),
      });
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "ポケモンが見つかりませんでした",
      );
      setPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    pokemon,
    error,
    isLoading,
    handleSetQuery,
    handleSearchPokemon,
  };
};
