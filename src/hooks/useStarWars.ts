import { useEffect, useState } from "react";

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export const useStarWars = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomCharacter = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Get total count of characters
      const countResponse = await fetch("https://swapi.dev/api/people/");
      const countData = await countResponse.json();
      const totalCharacters = countData.count;

      // Get random character
      const randomId = Math.floor(Math.random() * totalCharacters) + 1;
      const response = await fetch(`https://swapi.dev/api/people/${randomId}/`);
      if (!response.ok) {
        throw new Error("キャラクターの取得に失敗しました");
      }
      const data = await response.json();
      setCharacter(data);
    } catch (err) {
      setError("キャラクターの取得に失敗しました");
      setCharacter(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  return {
    character,
    isLoading,
    error,
    handleClickNextCharacter: fetchRandomCharacter,
  };
};
