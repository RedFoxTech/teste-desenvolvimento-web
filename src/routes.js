import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header'
import MainPokemon from './pages/pokemon/main';
import ShowPokemon from './pages/pokemon/show';
import CriarPokemon from './pages/pokemon/new';
import EditarPokemon from './pages/pokemon/edit';
import DeletarPokemon from './pages/pokemon/delete';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="row">
                <Switch>
                    <Route exact path="/" component={MainPokemon}/>
                    <Route path="/pokemons/:id" component={ShowPokemon}/>
                    <Route exact path="/criarPokemon" component={CriarPokemon}/>
                    <Route exact path="/editarPokemon/:id" component={EditarPokemon}/>
                    <Route exact path="/deletarPokemon/:id" component={DeletarPokemon}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
    
}

export default Routes;