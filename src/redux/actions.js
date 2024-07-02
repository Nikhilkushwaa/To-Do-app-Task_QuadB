// This file defines action types and action creates for the Redux store.

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

export const editTask = (taskId, newText) => ({
  type: EDIT_TASK,
  payload: { taskId, newText }
});
// When a user clicks the "Add Task" button the addTask action creator is called to create an action that adds a new task... This action is then goes to the Redux store...