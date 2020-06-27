import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import RegisterPokemon from "../register/index"





export const routes = {
  Home: "/",
  Register: "/register",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Register} component={RegisterPokemon}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
