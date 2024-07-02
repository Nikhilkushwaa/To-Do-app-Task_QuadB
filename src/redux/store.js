
// This file creates the Redux store and applies the Redux DevTools extension for debugging.
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
// When the application starts then the Redux store is created which holds the state of the app.. This store is provided to the entire app through the Redux component.....