import React from 'react'
import WebFont from 'webfontloader'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import Router from "../Router/index"
import { generateReducers } from "../../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

WebFont.load({
  google: {
    families: ['Oxanium', 'cursive']
  }
});

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
}

export default App;
