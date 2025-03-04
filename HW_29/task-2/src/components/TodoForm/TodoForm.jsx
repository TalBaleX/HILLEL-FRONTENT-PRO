import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice.jsx";
import "./TodoForm.css";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <form id="todo-form" onSubmit={submit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
