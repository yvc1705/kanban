import { useState } from "react";
import { Task } from "../utils/data-tasks";

const lowPriorityIcon = "🍃";
const mediumPriorityIcon = "⚡";
const highPriorityIcon = "🔥" ;
const TaskCard = ({ task, updatedTaskPoints }: { 
  task: Task 
  updatedTaskPoints: (task:Task, points:number)=>void
}) => {
  const points = task.points || 0

  return (
    <div className="text-4xl text border rounded-lg px-2 p-2 m-2 bg-grey-50 w-50">
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
        <button onClick = {()=> updatedTaskPoints(task, points -1)}>-</button>
        <div className="font-bold">{points}</div>
        <button onClick={()=> updatedTaskPoints(task, points + 1) }>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
