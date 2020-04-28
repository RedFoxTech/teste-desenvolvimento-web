import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
// Actions
import {fetchPokemonData} from './actions/fetchPokemonData';
// Components
import PokeItem from './components/pokeItem/pokeItem';
import Lista from './containers/Lista/Lista';
import Pokedex from './containers/Pokedex/Pokedex';
import Ash from './containers/Ash/Ash';
// Assets
import gotta_catch from './assets/gotta_catch_them_all.png';
import pokedex from './assets/pokedex.png';

const App = (props) => {

  useEffect( () => {
    props.onLoad();
  })

  return (
      <Switch>
        <Route path="/lista" component={Lista}/>
        <Route path="/pokedex" component={Pokedex}/>
        <Route path="/pokemon/:pokemonName"/>
        <Route path="/">
          <div className="container-fluid background">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-8 col-sm-6 pt-4">
                  <PokeItem src={gotta_catch} link="/lista"/>
                </div>
                <div className="col col-8 col-sm-6 pt-4">
                  <PokeItem src={pokedex} link="/pokedex"/>
                </div>
              </div>
            </div>
            <Ash/>
          </div>
        </Route>
      </Switch>
  );
};

const mapDispatchToProps = dispatch => {
  return ({
    onLoad: () => dispatch(fetchPokemonData())
  })
}

export default connect(null, mapDispatchToProps)(App);
