import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomePage";


export const routes = {
  home: "/",
  register: "/register",
  list: "/list"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        {/* <Route exact path={routes.feed} component={FeedPage} /> */}
        {/* <Route exact path={routes.register} component={RegisterPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;