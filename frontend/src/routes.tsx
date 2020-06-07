import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreatePokemon from './pages/CreatePokemon';
import UpdatePokemon from './pages/UpdatePokemon';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePokemon} path="/create-pokemon"/>
            <Route component={UpdatePokemon} path="/update-pokemon"/>
        </BrowserRouter>
    )
}

export default Routes;