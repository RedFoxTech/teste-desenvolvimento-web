import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from '../pages/Create/Create';
import List from '../pages/List/List';
import Edit from '../pages/Edit/Edit';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/create" component={Create} />
      <Route exact path="/" component={List} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
  );
};

export default Routes;
