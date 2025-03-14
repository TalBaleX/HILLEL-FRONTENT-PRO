import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDoApp from "./ToDoApp.jsx";

test("renders the page with title TODO", () => {
  render(<ToDoApp />);
  expect(document.title).toBe("TODO");
});

test("allows input of both letters and numbers", () => {
  render(<ToDoApp />);
  const input = screen.getByPlaceholderText("Enter a task");
  fireEvent.change(input, { target: { value: "Task 123" } });
  expect(input.value).toBe("Task 123");
});

test("shows error when trying to add empty task", () => {
  render(<ToDoApp />);
  const button = screen.getByText("Add Task");
  fireEvent.click(button);
  expect(screen.getByText("Task cannot be empty")).toBeInTheDocument();
});

test("adds a new task to the list", () => {
  render(<ToDoApp />);
  const input = screen.getByPlaceholderText("Enter a task");
  const button = screen.getByText("Add Task");
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("checks for localStorage (should fail)", () => {
  render(<ToDoApp />);
  expect(() => {
    localStorage.getItem("tasks");
  }).toThrow();
});
