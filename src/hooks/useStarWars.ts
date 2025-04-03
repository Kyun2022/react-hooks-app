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

type UseStarWars = () => {
  character: Character | null;
  handleClickNextCharacter: () => void;
};

export const useStarWars: UseStarWars = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      const data = (await response.json()) as Character;
      setCharacter(data);
    };

    void fetchCharacter();
  }, [id]);

  const handleClickNextCharacter = () => {
    setId(id + 1);
  };

  return { character, handleClickNextCharacter };
};
