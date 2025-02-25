import { Task } from "../utils/data-tasks";
const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="text-4xl text border rounded-lg px-2 p-2 m-2 bg-grey-50 w-122">
      <div className="text-base font-semibold py-2">{task.title}</div>
      <div className="flex gap-4 justify-between py-2 text-gray-700 text-sm">
        <div>{task.id}</div>
        <div>{task.points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
