import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Header from './components/header'
import Front from './components/front'
import Form from './components/form'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Front/>
    <Form/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
