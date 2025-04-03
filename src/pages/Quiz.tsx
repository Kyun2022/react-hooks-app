import { NextPage } from "next";
import { useState } from "react";

type Question = {
  id: number;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
  category: string;
};

const questions: Question[] = [
  {
    id: 1,
    category: "アート",
    question: "モナ・リザを描いた芸術家は誰でしょう？",
    choices: [
      "レオナルド・ダ・ヴィンチ",
      "ミケランジェロ",
      "ラファエロ",
      "ボッティチェリ",
    ],
    answer: 0,
    explanation:
      "モナ・リザは、1503年頃にレオナルド・ダ・ヴィンチによって描かれた肖像画です。現在はルーブル美術館に展示されています。",
  },
  {
    id: 2,
    category: "テクノロジー",
    question: "最初のiPhoneが発売された年は？",
    choices: ["2005年", "2006年", "2007年", "2008年"],
    answer: 2,
    explanation:
      "初代iPhoneは2007年1月9日に発表され、同年6月29日にアメリカで発売されました。スマートフォンの歴史を大きく変えた革新的な製品でした。",
  },
  {
    id: 3,
    category: "食文化",
    question: "寿司の「シャリ」の語源となった言葉は？",
    choices: [
      "シャープ（鋭い）",
      "シャレ（洒落）",
      "サリ（去り）",
      "シャリシャリ（食感）",
    ],
    answer: 2,
    explanation:
      "「シャリ」は「サリ（去り）」が語源です。酢飯を握る際に、余分な米が「去る」ことからこの名前が付いたとされています。",
  },
];

const Page: NextPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleAnswerClick = (choiceIndex: number) => {
    setSelectedAnswer(choiceIndex);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {/* カテゴリーバッジ */}
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-600">
            {question.category}
          </span>

          {/* 問題番号と質問 */}
          <div className="mb-8">
            <h2 className="mb-2 text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <h1 className="text-2xl font-bold text-gray-800">
              {question.question}
            </h1>
          </div>

          {/* 選択肢 */}
          <div className="grid gap-4">
            {question.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showExplanation}
                className={`rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                  selectedAnswer === null
                    ? "border-gray-200 hover:border-purple-400 hover:bg-purple-50"
                    : selectedAnswer === index
                      ? index === question.answer
                        ? "border-green-400 bg-green-50"
                        : "border-red-400 bg-red-50"
                      : index === question.answer && showExplanation
                        ? "border-green-400 bg-green-50"
                        : "border-gray-200 opacity-50"
                }`}
              >
                <span className="font-medium">{choice}</span>
              </button>
            ))}
          </div>

          {/* 解説 */}
          {showExplanation && (
            <div className="mt-8 rounded-xl bg-blue-50 p-6">
              <h3 className="mb-2 font-semibold text-blue-800">解説</h3>
              <p className="text-blue-700">{question.explanation}</p>
            </div>
          )}

          {/* 次の問題ボタン */}
          {showExplanation && (
            <button
              onClick={handleNextQuestion}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              次の問題へ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
