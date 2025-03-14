import React, { useState, useEffect } from "react";
import ToDoInput from "../ToDoInput/ToDoInput.jsx";
import ToDoList from "../ToDoList/ToDoList.jsx";
import "./ToDoApp.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = "TODO";
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default ToDoApp;
