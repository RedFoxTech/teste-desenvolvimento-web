import React,{useState} from 'react';
import Header from './components/header/index.js'
import PokemonCard from './components/cards/index.js'
import styled from 'styled-components'
import { pokemons } from './Mock';
import Data from './Pokemon-data.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokeDetails from './container/PokeDetails/index'
import PokeMainPage from './container/PokeMainPage/index'
import { useHistory } from 'react-router-dom'


const App = () => {

  const [pokemon,setPokemon] = useState(null);

  const handleOnPokemonChange = (x) => {
    setPokemon(x)
  }

  console.log(pokemon)

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
