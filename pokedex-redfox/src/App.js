import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokeDetails from './container/PokeDetails/index'
import PokeMainPage from './container/PokeMainPage/index'





const App = () => {

  const [pokemon, setPokemon] = useState(null);

  const handleOnPokemonChange = (activePokemon) => {
    setPokemon(activePokemon)
  }

  return (
    <Router>
      <Switch>
        <Route exact path={'/'}><PokeMainPage changePokemon={handleOnPokemonChange} /></Route>
        <Route exact path={'/poke-details'}><PokeDetails selectedPokemon={pokemon} /></Route>
      </Switch>
    </Router>
  )

}

export default App;
