import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  FETCH_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  COMPLETE_TASK_REQUEST,
  CLEAR_TASKS_REQUEST,
  fetchTasksSuccess,
  addTaskSuccess,
  deleteTaskSuccess,
  updateTaskSuccess,
  completeTaskSuccess,
  clearTasksSuccess,
} from "./actions";
import {
  apiFetchTasks,
  apiAddTask,
  apiDeleteTask,
  apiUpdateTask,
  apiCompleteTask,
  apiClearTasks,
} from "../api/tasks";

function* fetchTasks() {
  try {
    const tasks = yield call(apiFetchTasks);
    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    console.error("Failed to fetch tasks", error);
  }
}

function* addTask(action) {
  try {
    const newTask = yield call(apiAddTask, action.payload);
    yield put(addTaskSuccess(newTask));
  } catch (error) {
    console.error("Failed to add task", error);
  }
}

function* deleteTask(action) {
  try {
    yield call(apiDeleteTask, action.payload);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    console.error("Failed to delete task", error);
  }
}

function* updateTask(action) {
  try {
    const updatedTask = yield call(apiUpdateTask, action.payload);
    yield put(updateTaskSuccess(updatedTask));
  } catch (error) {
    console.error("Failed to update task", error);
  }
}

function* completeTask(action) {
  try {
    const updatedTask = yield call(apiCompleteTask, action.payload.id);
    yield put(completeTaskSuccess(updatedTask));
  } catch (error) {
    console.error("Failed to complete task", error);
  }
}

function* clearTasks() {
  try {
    yield call(apiClearTasks);
    yield put(clearTasksSuccess());
  } catch (error) {
    console.error("Failed to clear tasks", error);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(FETCH_TASKS_REQUEST, fetchTasks),
    takeEvery(ADD_TASK_REQUEST, addTask),
    takeEvery(DELETE_TASK_REQUEST, deleteTask),
    takeEvery(UPDATE_TASK_REQUEST, updateTask),
    takeEvery(COMPLETE_TASK_REQUEST, completeTask),
    takeEvery(CLEAR_TASKS_REQUEST, clearTasks),
  ]);
}
