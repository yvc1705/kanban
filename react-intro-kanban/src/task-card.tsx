const TaskCard = ({title, id, points})=>{
    return (
    <div className="text-4xl text border rounded-lg px-2 p-2 m-2 bg-grey-200">
      <div className="text-4xl py-2">{title}</div>
      <div className="flex gap-4 justify-between">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>)
  };

  export default TaskCard;