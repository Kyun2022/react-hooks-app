import { NextPage } from "next";

import { useQuotesRandom } from "@/hooks/useQuotesRandom";

const Page: NextPage = () => {
  const { currentQuote } = useQuotesRandom();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-center text-2xl">{currentQuote}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
