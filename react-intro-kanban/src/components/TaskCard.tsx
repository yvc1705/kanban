import { Task } from "../utils/data-tasks";
const TaskCard = ({task} : {
  task:Task
}) =>{
    return (
    <div className="text-4xl text border rounded-lg px-2 p-2 m-2 bg-grey-200">
      <div className="text-4xl py-2">{task.title}</div>
      <div className="flex gap-4 justify-between">
        <div>{task.id}</div>
        <div>{task.points}</div>
      </div>
    </div>)
  };

  export default TaskCard;