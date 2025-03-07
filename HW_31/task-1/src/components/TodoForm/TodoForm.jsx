import React, { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
}
