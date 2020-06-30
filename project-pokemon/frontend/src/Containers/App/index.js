import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline
} from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import theme from "../../Style/theme";
import Router from "../Router/index";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../Reducers/index";
import { routerMiddleware } from "connected-react-router";


const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")
});

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>
);

export default App;