import { combineReducers } from "redux";
import {
  FETCH_TASKS_SUCCESS,
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  COMPLETE_TASK_SUCCESS,
  CLEAR_TASKS_SUCCESS,
} from "./actions";

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return action.payload;
    case ADD_TASK_SUCCESS:
      return [...state, action.payload];
    case DELETE_TASK_SUCCESS:
      return state.filter((task) => task.id !== action.payload);
    case UPDATE_TASK_SUCCESS:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title,
              completed: action.payload.completed,
            }
          : task
      );
    case COMPLETE_TASK_SUCCESS:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    case CLEAR_TASKS_SUCCESS:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
