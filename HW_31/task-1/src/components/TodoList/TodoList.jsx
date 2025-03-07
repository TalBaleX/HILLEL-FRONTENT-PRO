import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default function TodoList({
  todos,
  removeTodo,
  toggleComplete,
  editTodo,
}) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
