import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers/index";
import { routerMiddleware } from "connected-react-router";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router/index";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <div>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
    </Provider>
  </div>
);

export default App;
