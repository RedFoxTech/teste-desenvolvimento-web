import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/HomePage";
import RegisterPokemon from "../containers/RegiterPage";
import UpdatePokemon from "../containers/UpdatePage";
import PokemonListPage from "../containers/PokemonListPage";


export const routes = {
  home: "/",
  register: "/register",
  list: "/list",
  update: "/update"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.register} component={RegisterPokemon} />
        <Route exact path={routes.list} component={PokemonListPage} />
        <Route exact path={routes.update} component={UpdatePokemon} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;