import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import { isAuthenticated } from "./services/authentication";

//Importando as páginas
import LoginScreen from './pages/LoginPage';
import RegisterScreen from './pages/RegisterPage';
import DashboardScreen from './pages/DashboardPage';
import AddPokemonScreen from './pages/AddPokemonPage';
import UpdatepokemonScreen from './pages/UpdatePokemonPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />

        <PrivateRoute path="/app" component={DashboardScreen} />
        <PrivateRoute path="/addpokemon" component={AddPokemonScreen} />
        <PrivateRoute path="/updatepokemon" component={UpdatepokemonScreen} />

        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
