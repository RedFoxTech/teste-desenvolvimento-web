import React from "react";
import { Route, Switch } from "react-router-dom";
import Image from "../Image";
import Insert from "../Insert";
import Edit from "../Edit";
import Filter from "../Filter";
import Delete from "../Delete";
import { ControlPage } from "../ControlPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Image} />
      <Route exact path="/insert" component={Insert} />
      <Route exact path="/filter" component={Filter} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/delete" component={Delete} />
    </Switch>
  );
};
