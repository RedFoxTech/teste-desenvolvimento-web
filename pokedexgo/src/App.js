import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import fundo from './assets/fundo.png';
import NavBar from './components/layout/NavBar';
import PainelPokemon from './components/layout/PainelPokemon';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${fundo})` }}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={PainelPokemon} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
