import { NextPage } from "next";

import Button from "@/components/common/parts/Button";
import { useStarWars } from "@/hooks/useStarWars";

const Page: NextPage = () => {
  const { character, handleClickNextCharacter } = useStarWars();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div>
          {character ? (
            <div className="text-center text-base">
              <h2>{character?.name}</h2>
              <p>身長: {character?.height}</p>
              <p>体重: {character?.mass}</p>
              <p>髪の色: {character?.hair_color}</p>
              <p>肌の色: {character?.skin_color}</p>
              <p>目の色: {character?.eye_color}</p>
              <p>生年月日: {character?.birth_year}</p>
              <p>性別: {character?.gender}</p>
            </div>
          ) : (
            <div className="text-center text-base">
              <p>Loading...</p>
            </div>
          )}

          <div className="flex justify-center">
            <Button
              label="次のキャラクター"
              variant="primary"
              className="mt-4"
              onClick={handleClickNextCharacter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
