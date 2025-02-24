import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Todos.css";

const validationSchema = Yup.object().shape({
  taskName: Yup.string().required("Required").min(5, "Invalid task name"),
});

export default function Todos() {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <Formik
        initialValues={{ taskName: "" }}
        validationSchema={validationSchema}
        onSubmit={(value, { setSubmitting, resetForm }) => {
          createTask(value.taskName);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="taskName" className="form-control" />
            <ErrorMessage
              name="taskName"
              component="div"
              className="text-danger"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary mt-2"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className="task-list mt-4">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.name}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-danger btn-sm ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
