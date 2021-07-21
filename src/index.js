import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*Data*/
let PostData = [
    {id: 1, message: "Some message for post", like: 15},
    {id: 2, message: "Some different for post number 2", like: 10},
    {id: 3, message: "First post, i gues", like: 3}
]

let DialogData = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Dasha"},
    {id: 3, name: "Masha"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Glasha"}
]

let MessageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Welcome"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Where is my money?"},
    {id: 5, message: "I need my money"},
]


ReactDOM.render(

  <React.StrictMode>
    <App PostData={PostData}
         DialogData ={DialogData}
         MessageData = {MessageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
