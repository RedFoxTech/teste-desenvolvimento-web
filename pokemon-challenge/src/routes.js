import React from 'react';
import { useRoutes } from 'hookrouter';
import PokemonList from './screens/pokemon-list/pokemon-list'
import PokemonDetails from './screens/pokemon-details/pokemon-details';
import PokemonCreate from './screens/pokemon-create/pokemon-create';

const routes = {
    '/': () => <PokemonList />,
    '/details/:pokedexNum': ({pokedexNum}) => <PokemonDetails pokedexNum={pokedexNum}/>,
    '/create': () => <PokemonCreate />,
  };
  
  function Routes() {
    return useRoutes(routes);
  }
  
  export default Routes;