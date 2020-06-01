import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import PokemonTable from './pages/PokemonTable';
import PokemonAdd from './pages/PokemonAdd';
import PokemonEditShow from './pages/PokemonEditShow';
import history from './services/history';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={PokemonTable} />
          <Route path="/pokemon/:id" component={PokemonEditShow} />
          <Route path="/add/pokemon/" component={PokemonAdd} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
