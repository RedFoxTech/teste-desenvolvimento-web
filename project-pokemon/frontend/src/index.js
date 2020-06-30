import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App/index";
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router' ;
import { generateReducers } from './Reducers';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const store = createStore(
    generateReducers(history),
    applyMiddleware(routerMiddleware(history)),
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);