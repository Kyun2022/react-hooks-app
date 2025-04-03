import { useState } from "react";

import { Character, StarWarsResponse } from "@/types/api";

interface UseStarWarsReturn {
  character: Character | null;
  error: string | null;
  isLoading: boolean;
  handleClickNextCharacter: () => Promise<void>;
}

export const useStarWars = (): UseStarWarsReturn => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomCharacter = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/people/");
      if (!response.ok) {
        throw new Error("キャラクター情報の取得に失敗しました");
      }
      const data = (await response.json()) as StarWarsResponse;
      const totalCount = data.count;
      const randomId = Math.floor(Math.random() * totalCount) + 1;

      const characterResponse = await fetch(
        `https://swapi.dev/api/people/${randomId}/`,
      );
      if (!characterResponse.ok) {
        throw new Error("キャラクター情報の取得に失敗しました");
      }
      const characterData = (await characterResponse.json()) as Character;
      setCharacter(characterData);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "キャラクター情報の取得に失敗しました",
      );
      setCharacter(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickNextCharacter = async (): Promise<void> => {
    try {
      await fetchRandomCharacter();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "キャラクター情報の取得に失敗しました",
      );
    }
  };

  return {
    character,
    error,
    isLoading,
    handleClickNextCharacter,
  };
};
