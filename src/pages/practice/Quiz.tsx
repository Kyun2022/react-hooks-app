import { NextPage } from "next";

import Button from "@/components/common/parts/Button";
import { useQuiz } from "@/hooks/useQuiz";

const QUESTION = "Reactはどのようなものですか？";
const CHOICES = ["ライブラリ", "フレームワーク", "言語", "データベース"];

const Page: NextPage = () => {
  const { userChoice, result, handleClick, handleSubmit } = useQuiz();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-center text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {CHOICES.map((choice, index) => (
              <Button
                key={index}
                label={choice}
                variant="secondary"
                onClick={() => handleClick(choice)}
                className={`${choice === userChoice && "bg-blue-400 text-white"}`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center ">
            <Button label="送信" variant="primary" onClick={handleSubmit} />
          </div>

          <h3 className="mt-8 text-center text-4xl">{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
