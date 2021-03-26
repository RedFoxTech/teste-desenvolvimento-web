import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { Navbar } from 'react-materialize';
import { NavItem } from 'react-materialize';
import { Icon } from 'react-materialize';

import Pokedex from './components/Pokedex';
import Introduction from './components/Introduction';

function App()
{
  return (
    <Router>
      <div>
        <Navbar
          className="blue-grey darken-1 z-depth-3"
          alignLinks="left"
          brand={<Icon>home</Icon>}
          id="mobile-nav"
          centerChildren={true}
          centerLogo={true}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem href="/intro">Introduction</NavItem>
          <NavItem href="/pokedex">Pokedex</NavItem>
        </Navbar>
        <div className="container">
          <Switch>
            <Route exact path={['/', '/intro']} component={Introduction} />
            <Route exact path="/pokedex" component={Pokedex} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
