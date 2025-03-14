import React, { useState } from "react";
import "./ToDoInput.css";

const ToDoInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      setError("Task cannot be empty");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
    } else {
      setError("Task cannot be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="todo-input"
        placeholder="Enter a task"
      />
      <button type="submit" className="todo-submit-button">
        Add Task
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default ToDoInput;
