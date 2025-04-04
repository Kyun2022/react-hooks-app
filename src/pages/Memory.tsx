import { NextPage } from "next";

import Button from "@/components/common/parts/Button";
import { useMemory } from "@/hooks/useMemory";

const Page: NextPage = () => {
  const {
    entryList,
    title,
    content,
    filteredDate,
    handleChangeTitle,
    handleChangeContent,
    handleChangeFilterDate,
    handleClickAddEntry,
  } = useMemory();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">日記アプリ</h2>
          {/* タイトル・コンテンツの入力フォーム */}
          <div>
            <input
              type="text"
              placeholder="タイトルを入力してください"
              className="mt-4 w-full rounded-md border p-4 outline-none placeholder:text-sm placeholder:text-gray-400"
              onChange={handleChangeTitle}
              value={title}
            />
            <textarea
              placeholder="内容を入力してください"
              className="mt-4 w-full rounded-md border p-4 outline-none placeholder:text-sm placeholder:text-gray-400"
              onChange={handleChangeContent}
              value={content}
            />
            <Button
              label="追加"
              variant="primary"
              className="mt-4"
              onClick={handleClickAddEntry}
            />
          </div>

          {/* 日付フィルター */}
          <div className="mt-8 flex items-center justify-between">
            <span>日付フィルター</span>
            <input
              type="date"
              className="rounded-md border px-3 py-2 outline-none"
              onChange={handleChangeFilterDate}
              value={filteredDate}
            />
          </div>

          {/* 日記一覧 */}
          <div className="mt-7">
            <h2 className="text-xl font-bold">日記一覧</h2>
            <ul>
              {entryList.map((entryList, index) => (
                <li key={index} className="mt-4 rounded-md border p-4">
                  <h3>{entryList.title}</h3>
                  <p>{entryList.content}</p>
                  <p>{entryList.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
