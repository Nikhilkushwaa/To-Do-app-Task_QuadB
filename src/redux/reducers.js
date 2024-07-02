
// This file defines the root reducer for the Redux store handling various actions...
import { ADD_TASK, TOGGLE_TASK, LOAD_TASKS, DELETE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: state.tasks.concat({ id: Date.now(), text: action.payload, completed: false })
      };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { id: task.id, text: task.text, completed: !task.completed };
          }
          return task;
        })
      };
    case LOAD_TASKS:
      return {
        tasks: action.payload
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case EDIT_TASK:
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.taskId) {
            return { id: task.id, text: action.payload.newText, completed: task.completed };
          }
          return task;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
// When the addTask action is active..the root reducer handles the action by updating the state with the new task. The state is then updated with the new list of tasks..