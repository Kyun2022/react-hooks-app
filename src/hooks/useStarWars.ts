import { useCallback, useRef, useState } from "react";

import { Character } from "@/types/api";

// Star Wars APIの全キャラクター数（2024年時点）
const TOTAL_CHARACTERS = 82;

// キャッシュの型定義
interface CharacterCache {
  [key: number]: Character;
}

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

  // キャッシュの参照を保持
  const characterCache = useRef<CharacterCache>({});

  const fetchCharacterWithRetry = useCallback(
    async (id: number, retries = 3): Promise<Character> => {
      try {
        // キャッシュにあればそれを返す
        if (characterCache.current[id]) {
          return characterCache.current[id];
        }

        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) {
          throw new Error("キャラクター情報の取得に失敗しました");
        }
        const data = (await response.json()) as Character;

        // キャッシュに保存
        characterCache.current[id] = data;
        return data;
      } catch (err) {
        if (retries > 0) {
          // 1秒待ってリトライ
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return fetchCharacterWithRetry(id, retries - 1);
        }
        throw err;
      }
    },
    [],
  );

  const fetchRandomCharacter = useCallback(async (): Promise<void> => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const randomId = Math.floor(Math.random() * TOTAL_CHARACTERS) + 1;
      const characterData = await fetchCharacterWithRetry(randomId);
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
  }, [isLoading, fetchCharacterWithRetry]);

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
