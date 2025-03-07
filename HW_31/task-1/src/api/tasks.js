const BASE_URL = "http://localhost:3000";

export const apiFetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return await response.json();
};

export const apiAddTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
  return await response.json();
};

export const apiDeleteTask = async (taskId) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};

export const apiUpdateTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return await response.json();
};

export const apiCompleteTask = async (taskId) => {
  const taskResponse = await fetch(`${BASE_URL}/tasks/${taskId}`);
  if (!taskResponse.ok) {
    throw new Error("Failed to fetch task");
  }
  const task = await taskResponse.json();
  const updatedTask = { ...task, completed: !task.completed };

  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: updatedTask.completed }),
  });
  if (!response.ok) {
    throw new Error("Failed to complete task");
  }
  return await response.json();
};

export const apiClearTasks = async () => {
  const tasks = await apiFetchTasks();
  for (const task of tasks) {
    await apiDeleteTask(task.id);
  }
};
