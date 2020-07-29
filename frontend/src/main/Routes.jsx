import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import PokemonCreate from '../components/pokemon/PokemonCreate'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Pokemon' component={PokemonCreate} />
        <Redirect from='*' to='/' />
    </Switch>