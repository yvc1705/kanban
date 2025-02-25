import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks } from "./utils/data-tasks";


function App() {

  return (
    <>
    {tasks.map((task)=> <TaskCard task = {task} /> )}

      {/* <TaskCard task={task} />
      <TaskCard task={task2} />
      <TaskCard task={task3} />
      <TaskCard task={task4} /> }
       <TaskCard title={title} id={id} points={points} />
      <TaskCard title="competitor analysis" id="Bus-2" points={3} />
      <TaskCard title="Develop Business Strategy" id="Bus-3" points={8} />
      <TaskCard title="Develop Marketing Strategy" id="Bus-4" points={5} />
     */}
     
    </>
  );
}

export default App;
