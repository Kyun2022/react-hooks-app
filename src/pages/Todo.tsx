import { NextPage } from "next";
import Link from "next/link";
import { FaCheck, FaHome, FaPlus, FaTrash } from "react-icons/fa";

import { useTodoApp } from "@/hooks/useTodoApp";

const Page: NextPage = () => {
  const {
    taskLabel,
    taskList,
    handleChangeTaskLabel,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  } = useTodoApp();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 py-12">
      {/* 戻るボタン */}
      <Link
        href="/"
        className="group fixed left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
      >
        <FaHome className="transition-transform duration-300 group-hover:-translate-x-1" />
        ホームに戻る
      </Link>

      <div className="w-full max-w-2xl px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-1 text-sm font-medium text-white">
            TODO APP
          </div>

          {/* 入力フォーム */}
          <div className="mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
              className="relative"
            >
              <input
                type="text"
                placeholder="新しいタスクを入力..."
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-24 text-gray-700 outline-none transition-all focus:border-violet-400"
                value={taskLabel}
                onChange={handleChangeTaskLabel}
              />
              <button
                type="submit"
                className="group absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1.5 text-sm font-medium text-white transition-all hover:shadow-lg"
              >
                <FaPlus className="transition-transform duration-300 group-hover:rotate-90" />
                追加
              </button>
            </form>
          </div>

          {/* タスクリスト */}
          <div className="mt-8 space-y-4">
            {taskList.map((task) => (
              <div
                key={task.index}
                className="group flex items-center justify-between rounded-xl border-2 border-gray-100 bg-gray-50 p-4 transition-all hover:border-violet-200 hover:bg-violet-50"
              >
                <span
                  className={`text-gray-700 transition-all ${
                    task.completed ? "text-gray-400 line-through" : ""
                  }`}
                >
                  {task.label}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCompleteTask(task.index)}
                    className={`rounded-lg p-2 transition-all ${
                      task.completed
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.index)}
                    className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all hover:bg-red-100 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
