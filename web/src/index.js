import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PokeAdd from './components/PokeAdd/index';
import NotFound from './components/NotFound/index';
import PokeTest from './components/PokeTest/index';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact={ true } component={ App }/>
            <Route path="/adicionar" component={ PokeAdd }/> 
            <Route path="/teste" component={ PokeTest }/> 
            <Route component={ NotFound }/>           
        </Switch>    
    </Router>
, document.getElementById('root'));
