import React, { useState } from "react";
import "./Todo.css";

export default function Todo({ todo, removeTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText, false);
    setIsEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className="todo-text">{todo.title}</span>
      )}
      <div className="todo-buttons">
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}
