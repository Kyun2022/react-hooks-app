import { NextPage } from "next";

import { useSignal } from "@/hooks/useSignal";

const Page: NextPage = () => {
  const { signal } = useSignal();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        <div
          className={`size-12 rounded-full  ${signal === "blue" ? "bg-blue-600" : "bg-gray-700"}`}
        />
        <div
          className={`size-12 rounded-full  ${signal === "yellow" ? "bg-yellow-600" : "bg-gray-700"}`}
        />
        <div
          className={`size-12 rounded-full  ${signal === "red" ? "bg-red-600" : "bg-gray-700"}`}
        />
      </div>
    </div>
  );
};

export default Page;
