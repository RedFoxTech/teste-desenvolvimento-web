import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreatePokemon from './pages/CreatePokemon';
import SearchPokemon from './pages/SearchPokemon';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={CreatePokemon} path='/create-pokemon'/>
            <Route component={SearchPokemon} path='/search-pokemon'/>
            
        </BrowserRouter>
    );
}

export default Routes;