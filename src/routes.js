import React, { Component } from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Home from 'Pages/Home'; 
import Pokemon from 'Pages/Pokemon';
import Types from 'Pages/Types'; 

export default class Routes extends Component { 
    render () { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/pokemon/:name" exact component={ Pokemon }/>
                    <Route path="/type/:type" exact component={ Types }/>
                </Switch>
            </BrowserRouter>
        )
    }
}
