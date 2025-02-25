import "./App.css";
import TaskCard from "./task-card";

function App() {
  const title = "DO MARKET RESEARCH";
  const id = "BUS-1";
  const points = 5;

  return (
    <>
      <TaskCard title={title} id={id} points={points} />
      <TaskCard title="competitor analysis" id="Bus-2" points={3} />
      <TaskCard title="Develop Business Strategy" id="Bus-3" points={8} />
      <TaskCard title="Develop Marketing Strategy" id="Bus-4" points={5} />
    </>
  );
}

export default App;
