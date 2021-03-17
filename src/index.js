import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
// import reportWebVitals from './reportWebVitals';

/**
 * @author CosmicTiger
 * @description First the redux storage is initialized
 * after that, we initialize BrowserRouter for react-router to work
 * with our routes in the app. To that we wrap all the application
 * within Provider component of react-redux to give the context of the state
 * @returns <Provider><Router><App /></Router></Provider>
 */
const store = generateStore();

const Routing = () => <Router><App /></Router>;
const Storing = () => <Provider store={store}><Routing /></Provider>

ReactDOM.render(
  <React.StrictMode>
    <Storing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
