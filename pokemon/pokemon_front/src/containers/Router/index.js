import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import RegisterPokemon from "../Register/index"
import SearchPokemon from "../Search/index";





export const routes = {
  Home: "/",
  Register: "/register",
  Search: "/search"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Register} component={RegisterPokemon}/>
        <Route exact path={routes.Search} component={SearchPokemon}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
