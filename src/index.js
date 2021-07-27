import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/reduxStore";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {observe} from "web-vitals/dist/modules/lib/observe";
import StoreContext from "./StoreContext";

let reRenderTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App
                    // state={state}
                    //  dispatch={store.dispatch.bind(store)}
                    //  store={store}
                />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


}

reRenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    reRenderTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
