import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import 'bootstrap/dist/css'

const userReducer = (state = {
  name: "Chris", age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME";
      state = {
        ...state,
        name: action.payload
      };
      break;

    case "SET_AGE";
      state = {
        ...state,
        age: action.payload
      };
      break;
  }

  return state
}

const store = createStore(combineReducers({math: mathReducer, user: userReducer}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
