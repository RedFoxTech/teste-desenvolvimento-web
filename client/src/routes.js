import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PokemonTable from './pages/PokemonTable';
import PokemonAdd from './pages/PokemonAdd';
import PokemonEditShow from './pages/PokemonEditShow';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PokemonTable} />
                <Route path="/pokemon/:id" component={PokemonEditShow} />
                <Route path="/add/pokemon/" component={PokemonAdd} />
            </Switch>
        </BrowserRouter>
    );
}
