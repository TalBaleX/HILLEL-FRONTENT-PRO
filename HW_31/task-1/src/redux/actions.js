export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export const COMPLETE_TASK_REQUEST = "COMPLETE_TASK_REQUEST";
export const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS";
export const COMPLETE_TASK_FAILURE = "COMPLETE_TASK_FAILURE";

export const CLEAR_TASKS_REQUEST = "CLEAR_TASKS_REQUEST";
export const CLEAR_TASKS_SUCCESS = "CLEAR_TASKS_SUCCESS";
export const CLEAR_TASKS_FAILURE = "CLEAR_TASKS_FAILURE";

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId,
});

export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

export const completeTaskSuccess = (taskId) => ({
  type: COMPLETE_TASK_SUCCESS,
  payload: taskId,
});

export const clearTasksSuccess = () => ({
  type: CLEAR_TASKS_SUCCESS,
});
