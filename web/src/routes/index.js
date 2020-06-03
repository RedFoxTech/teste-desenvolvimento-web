import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Main from '~/pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
