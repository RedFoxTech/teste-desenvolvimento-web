import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient">
        <a href="/grade" className="navbar-brand">
          <img src="./pokemon.svg" alt="" width="30" height="30" />
        </a>
      </nav>
      <div className="container mt-4">
        <Switch>
          <Route exact path={["/", "/pokemon"]} component={PokemonList} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
