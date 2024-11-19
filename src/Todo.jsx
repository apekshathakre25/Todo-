import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  function addTask() {
    if (task) {
      const newTaskObj = {
        id: Date.now(),
        text: task,
      };
      setNewTask([...newTask, newTaskObj]);
      setTask("");
    }
  }

  function deleteTask(id) {
    setNewTask(newTask.filter((task) => task.id !== id));
  }

  return (
    <div className="Todo_container">
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>+ADD</button>
      <ul>
        {newTask.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
