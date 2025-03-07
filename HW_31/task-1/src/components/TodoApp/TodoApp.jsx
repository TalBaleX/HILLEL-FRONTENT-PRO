import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import {
  FETCH_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  COMPLETE_TASK_REQUEST,
  CLEAR_TASKS_REQUEST,
} from "../../redux/actions";
import "./TodoApp.css";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch({ type: FETCH_TASKS_REQUEST });
  }, [dispatch]);

  const addTodo = (text) => {
    dispatch({
      type: ADD_TASK_REQUEST,
      payload: { title: text, completed: false },
    });
  };

  const removeTodo = (id) => {
    dispatch({ type: DELETE_TASK_REQUEST, payload: id });
  };

  const toggleComplete = (id) => {
    dispatch({ type: COMPLETE_TASK_REQUEST, payload: { id } });
  };

  const editTodo = (id, newText) => {
    dispatch({
      type: UPDATE_TASK_REQUEST,
      payload: { id, title: newText, completed: false },
    });
  };

  const clearTodos = () => {
    dispatch({ type: CLEAR_TASKS_REQUEST });
  };

  return (
    <div className="todo-app">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
      <button onClick={clearTodos}>Clear All</button>
    </div>
  );
}
