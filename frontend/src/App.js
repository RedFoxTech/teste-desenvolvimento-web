import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/reset.css';
import { HomePage, PokemonPage, GenerationPage, StatsPage, AttributesPage } from './pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/:pokemonName/:id/generation" component={GenerationPage} />
    <Route path="/:pokemonName/:id/stats" component={StatsPage} />
    <Route path="/:pokemonName/:id/attributes" component={AttributesPage} />
    <Route path="/:pokemonName/:id" component={PokemonPage} />
  </Switch>
);

export default App;
