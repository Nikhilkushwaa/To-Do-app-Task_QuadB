// this is the entry point of the application  rendering the App component within the Redux Provider.

// when the application is started the main.jsx renders the App component wrapped in the Redux Provider which makes the Redux store available to the entire app.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
   
  </Provider>
);
