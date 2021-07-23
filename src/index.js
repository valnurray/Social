import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import {observe} from "web-vitals/dist/modules/lib/observe";

let reRenderTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );


}

reRenderTree(state);
subscribe(reRenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
