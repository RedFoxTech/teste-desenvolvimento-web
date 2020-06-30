import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/index";

export const routes = {
  homePage: "/",
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.homePage} component={HomePage} /> 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;