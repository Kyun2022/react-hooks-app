import { useCallback, useEffect, useRef, useState } from "react";

interface Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  {
    text: "人生に失敗がないと、人生を失敗する。",
    author: "斎藤茂吉",
  },
  {
    text: "努力する人は希望を語り、怠ける人は不満を語る。",
    author: "井上靖",
  },
  {
    text: "苦しみは人を育て、困難は人を鍛える。",
    author: "西郷隆盛",
  },
  {
    text: "人間は、その人が思うところのものになる。",
    author: "中村天風",
  },
  {
    text: "夢見ることができれば、それは実現できる。",
    author: "ウォルト・ディズニー",
  },
  {
    text: "人生において最も大切なのは、自分が何者であるかを知ることである。",
    author: "ソクラテス",
  },
  {
    text: "今できることをやれ。明日できることは明日やれ。",
    author: "チャールズ・ディケンズ",
  },
  {
    text: "失敗は成功の母である。",
    author: "トーマス・エジソン",
  },
  {
    text: "人生は短い。だから、美しいものを求めなさい。",
    author: "宮沢賢治",
  },
  {
    text: "道を歩いていて、転んでもそれは前に進んでいるのだ。",
    author: "ヨハン・ヴォルフガング・フォン・ゲーテ",
  },
];

// 初期値として最初の名言を使用
const INITIAL_QUOTE = QUOTES[0];

interface UseQuotesReturn {
  quote: Quote | null;
  error: string | null;
  isLoading: boolean;
  isAutoRefresh: boolean;
  handleFetchQuote: () => Promise<void>;
  toggleAutoRefresh: () => void;
}

export const useQuotes = (): UseQuotesReturn => {
  const [quote, setQuote] = useState<Quote | null>(INITIAL_QUOTE);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();
  const isInitialMount = useRef(true);

  const getRandomQuote = useCallback((): Quote => {
    const currentIndex = QUOTES.findIndex((q) => q.text === quote?.text);
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * QUOTES.length);
    } while (randomIndex === currentIndex);
    return QUOTES[randomIndex];
  }, [quote]);

  const handleFetchQuote = useCallback(async (): Promise<void> => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const randomQuote = getRandomQuote();
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setQuote(randomQuote);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "名言の取得に失敗しました");
      setQuote(null);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, getRandomQuote]);

  const toggleAutoRefresh = useCallback(() => {
    setIsAutoRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    // 初回マウント時はスキップ
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // 自動更新の設定
    if (isAutoRefresh) {
      intervalRef.current = setInterval(() => {
        const randomQuote = getRandomQuote();
        setQuote(randomQuote);
      }, 10000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = undefined;
        }
      };
    }
  }, [isAutoRefresh, getRandomQuote]);

  return {
    quote,
    error,
    isLoading,
    isAutoRefresh,
    handleFetchQuote,
    toggleAutoRefresh,
  };
};
