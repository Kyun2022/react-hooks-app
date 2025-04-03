import { useState } from "react";

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
  description?: string;
};

export const usePokemon = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
    setError(null);
  };

  const handleSearchPokemon = async () => {
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
      const data = await response.json();

      // 説明文を取得
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
      const description = speciesData.flavor_text_entries.find(
        (entry: any) => entry.language.name === "ja",
      )?.flavor_text;

      setPokemon({
        ...data,
        description: description?.replace(/\f/g, " ") || "",
      });
      setError(null);
    } catch (err) {
      setError("ポケモンが見つかりませんでした");
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
