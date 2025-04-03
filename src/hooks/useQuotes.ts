import { useState } from "react";

type Quote = {
  text: string;
  author: string;
};

const quotes: Quote[] = [
  {
    text: "人生は自分で創るものです。明日という日は、今日の自分が決めた行動の結果なのです。",
    author: "松下幸之助",
  },
  {
    text: "夢を見ることができれば、それは実現できる。",
    author: "ウォルト・ディズニー",
  },
  {
    text: "失敗は成功の母です。失敗を恐れず、新しいことに挑戦し続けることが大切です。",
    author: "本田宗一郎",
  },
  {
    text: "できると思えばできる。できないと思えばできない。これは揺るぎない絶対的な法則です。",
    author: "パブロ・ピカソ",
  },
  {
    text: "今日できることを明日に延ばすな。",
    author: "ベンジャミン・フランクリン",
  },
  {
    text: "人生において最も価値があるのは、経験です。",
    author: "アインシュタイン",
  },
];

export const useQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  const getNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[newIndex].text === currentQuote.text);
    setCurrentQuote(quotes[newIndex]);
  };

  return { currentQuote, getNewQuote };
};
