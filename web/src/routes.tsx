import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import pokemonAdd from './pages/PokemonAdd'
import pokemonView from './pages/PokemonView'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/home" component={Home}/>
            <Route path="/pokemonAdd" component={pokemonAdd}/>
            <Route path="/pokemon/:pokedexNumber" component={pokemonView}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes