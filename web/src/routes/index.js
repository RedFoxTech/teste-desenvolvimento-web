import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import AddPokemon from '~/pages/AddPokemon';
import Show_Pokemon from '~/pages/Show_Pokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={AddPokemon} />
      <Route path="/pokemons/:id" exact component={Show_Pokemon} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
