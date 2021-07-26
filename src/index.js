import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {observe} from "web-vitals/dist/modules/lib/observe";

let reRenderTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store = {store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );


}

reRenderTree(store.getState());
store.subscribe(reRenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
