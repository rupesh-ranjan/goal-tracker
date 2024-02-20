import { useState } from "react";
import "./App.css";
const initaltask = ["Eat", "Sleep", "Code", "Repeat"];
export default function App() {
  const [tasks, setTasks] = useState(initaltask);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="App">
      <AddTask onAddTask={handleAddTask} />
      <ShowTask tasks={tasks} />
    </div>
  );
}

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(task);
  }

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function ShowTask({ tasks }) {
  const initialTaskCompleted = [];
  const [taskCompleted, setTaskCompleted] = useState(initialTaskCompleted);
  function handleTaskCompleted(task) {
    console.log(task);
    //setTaskCompleted((taskCompleted) => [...taskCompleted, task]);
  }
  return (
    <div>
      <TaskTodo tasks={tasks} onTaskCompleted={handleTaskCompleted} />
      {/* <TaskCompleted tasks={taskCompleted} /> */}
    </div>
  );
}

// function TaskTodo({ tasks }) {
function TaskTodo({ tasks, onTaskCompleted }) {
  function handleChange(task) {
    onTaskCompleted(task);
  }
  return (
    <div>
      <h2>To-do List</h2>
      {tasks.map((task, i) => (
        <div>
          <li key={i}>{task}</li>
          {/* <input type="checkbox" /> */}
          <input type="checkbox" onChange={handleChange(() => task)} />
        </div>
      ))}
    </div>
  );
}

// function TaskCompleted({ tasks }) {
//   return (
//     <div>
//       <h2>To-do List</h2>
//       {tasks ? (
//         tasks.map((task, i) => (
//           <div>
//             {/* <span style={{ float: "left" }}> */}
//             <li key={i}>{task}</li>
//             <input type="checkbox" />
//             {/* </span> */}
//           </div>
//         ))
//       ) : (
//         <p>No task completed</p>
//       )}
//     </div>
//   );
// }
