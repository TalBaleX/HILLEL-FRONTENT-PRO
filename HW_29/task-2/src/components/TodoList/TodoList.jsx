import { useSelector } from "react-redux";
import "./TodoList.css";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div id="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
