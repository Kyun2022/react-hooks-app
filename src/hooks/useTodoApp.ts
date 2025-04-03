import { useState } from "react";

interface Task {
  label: string;
  completed: boolean;
  index: number;
}

interface UseTodoAppReturn {
  taskLabel: string;
  taskList: Task[];
  handleChangeTaskLabel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  handleCompleteTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}

export const useTodoApp = (): UseTodoAppReturn => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleChangeTaskLabel = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTaskLabel(e.target.value);
  };

  const handleAddTask = (): void => {
    if (taskLabel === "") return;
    setTaskList((prevState) => [
      ...prevState,
      { label: taskLabel, completed: false, index: prevState.length },
    ]);
    setTaskLabel("");
  };

  const handleCompleteTask = (index: number): void => {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.index === index ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (index: number): void => {
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
