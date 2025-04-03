import { useState } from "react";

interface Quote {
  text: string;
  author: string;
}

interface QuoteResponse {
  _id: string;
  content: string;
  author: string;
}

interface UseQuotesReturn {
  quote: Quote | null;
  error: string | null;
  isLoading: boolean;
  handleFetchQuote: () => Promise<void>;
}

export const useQuotes = (): UseQuotesReturn => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchQuote = async (): Promise<void> => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("名言の取得に失敗しました");
      }

      const data = (await response.json()) as QuoteResponse;
      setQuote({
        text: data.content,
        author: data.author,
      });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "名言の取得に失敗しました");
      setQuote(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    quote,
    error,
    isLoading,
    handleFetchQuote,
  };
};
