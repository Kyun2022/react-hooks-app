import { useState } from "react";

type Task = {
  label: string;
  completed: boolean;
  index: number;
};

export const useTodoApp = () => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleChangeTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(e.target.value);
  };

  const handleAddTask = () => {
    if (taskLabel === "") return;
    setTaskList((prevState) => [
      ...prevState,
      { label: taskLabel, completed: false, index: prevState.length },
    ]);
    setTaskLabel("");
  };

  const handleCompleteTask = (index: number) => {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.index === index ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevState) =>
      prevState.filter((task) => task.index !== index),
    );
  };

  return {
    taskLabel,
    taskList,
    handleChangeTaskLabel,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  };
};
