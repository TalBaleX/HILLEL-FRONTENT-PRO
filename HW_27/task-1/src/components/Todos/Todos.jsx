import React, { useState, useEffect, useRef } from "react";

export default function Todos() {
  const [tasksArr, setTasksArr] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasksArr(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr]);

  const addTask = (e) => {
    e.preventDefault();
    const input = formRef.current.elements[0];
    if (input.value.trim()) {
      setTasksArr([...tasksArr, { name: input.value, checked: false }]);
      input.value = "";
    }
  };

  const toggleTask = (index) => {
    setTasksArr((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasksArr((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="containerTodos">
      <form ref={formRef} onSubmit={addTask} className="form">
        <input type="text" className="form__input" required />
        <button type="submit" className="form__btn">
          Add Task
        </button>
      </form>
      <ul>
        {tasksArr.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.checked ? "todo-item--checked" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(index)}
            />
            <span className="todo-item__description">{task.name}</span>
            <button
              className="todo-item__delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
