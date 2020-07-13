import React, { Component } from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Home from 'Pages/Home'; 
import Pokemon from 'Pages/Pokemon';

export default class Routes extends Component { 
    render () { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/pokemon/:name" exact component={ Pokemon }/>
                </Switch>
            </BrowserRouter>
        )
    }
}
