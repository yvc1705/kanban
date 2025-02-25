import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks as initialTasks, statuses, Task } from "./utils/data-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  const updatedTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, points } : t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <div className="flex justify-between task-3xl p2 font-bold text-gray-500">
          <h2 className="text=3xl p-2 capitalize font-bold text-gray-500">
            {column.title}
          </h2>
          <div className="text-xl p-2">
            {column.tasks.reduce(
              (total, task) => total + (task?.points || 0),
              0
            )}
          </div>
          </div>
          {column.tasks.map((task) => (
            <TaskCard task={task} updatedTaskPoints={updatedTaskPoints} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
