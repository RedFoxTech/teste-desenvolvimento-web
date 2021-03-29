import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { FilterPokemonsContextProvieder } from "../contexts/FilterPokemonsContext";

import useTokenStore from "../hooks/useTokenStore";
import DashBoard from "../pages/DashBoard";
import DashBoardCreatePokemon from "../pages/DashBoardCreatePokemon";
import DashBoardUpdateImage from "../pages/DashBoardUpdateImage";
import DashBoardUpdatePokemon from "../pages/DashBoardUpdatePokemon";
import DashBoardViewPokemon from "../pages/DashBoardViewPokemon";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function PrivateRoute({ component: Component, ...rest}) {
  const { isAuthenticated } = useTokenStore();

  return (
    <Route {...rest} render={props => 
      isAuthenticated()  ? (
        <Component {...props} />
      ) : (
        <Redirect  
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )}
    />
  )
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

        <FilterPokemonsContextProvieder>
          <PrivateRoute path="/dashboard" component={DashBoard}/>
          <PrivateRoute path="/create" component={DashBoardCreatePokemon}/>
          <PrivateRoute path="/updateimage" component={DashBoardUpdateImage}/>
          <PrivateRoute path="/updatepokemon" component={DashBoardUpdatePokemon}/>
          <PrivateRoute path="/viewpokemon" component={DashBoardViewPokemon}/>
        </FilterPokemonsContextProvieder>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;