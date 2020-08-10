import React from "react";
import { createGlobalStyle } from 'styled-components'
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { createBrowserHistory } from "history";

import theme from "../src/style/theme";
import Router from "../src/Router/index";
import { generateReducers } from "../src/reducers/index";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

const GlobalStyle = createGlobalStyle`
  body{
    margin:8px;
    height:calc(100vh - 16px);
  }
`

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Router history={history} />
    </MuiThemeProvider>
  </Provider>
);

export default App;