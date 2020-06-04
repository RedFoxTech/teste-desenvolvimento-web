import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import AddPokemon from '~/pages/AddPokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={AddPokemon} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
