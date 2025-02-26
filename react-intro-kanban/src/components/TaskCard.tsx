import { useState } from "react";
import { Task } from "../utils/data-tasks";

const lowPriorityIcon = "🍃";
const mediumPriorityIcon = "⚡";
const highPriorityIcon = "🔥";
const TaskCard = ({
  task,
  updatedTaskPoints, updateTaskTitle
}: {
  task: Task;
  updatedTaskPoints: (task: Task, points: number) => void;
  updateTaskTitle: (task: Task, title: string) => void;
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const points = task.points || 0;
  const updatePoints = (directions: "up" | "down") => {
    // if(points<0) return
    // if(points>13) return
    const fib = [0, 1, 2, 3, 5, 8, 13];
    const index = fib.indexOf(points);
    const nextIndex = directions === "up" ? index + 1 : index - 1;
    const newPoints = fib[nextIndex];
    if (newPoints !== undefined) updatedTaskPoints(task, newPoints);
  };

  return (
    <div className="text-4xl text border rounded-lg px-2 p-2 m-2 bg-grey-50 w-50">
      <div className="text-base front-base py-2">
        {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTaskTitle(task,e.target.value)}
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>{task.title}</div>
        )}
      </div>
      <div className="text-base font-semibold py-2">{task.title}</div>
      <div className="flex gap-4 justify-between py-2 text-gray-700 text-sm">
        <div className="flex gap-2">
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === "high" && highPriorityIcon}
          {task.priority === "medium" && mediumPriorityIcon}
          {task.priority === "low" && lowPriorityIcon}
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => updatePoints("down")}>-</button>
          <div className="font-bold">{points}</div>
          <button onClick={() => updatePoints("up")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
