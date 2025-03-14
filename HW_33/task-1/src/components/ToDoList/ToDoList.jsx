import React from "react";
import "./ToDoList.css";

const ToDoList = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          {task}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
