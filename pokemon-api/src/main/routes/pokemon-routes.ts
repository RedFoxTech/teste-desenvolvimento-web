import { Router } from 'express';
import { adapterRouter } from 'main/adapters/express-route-adapter';
import { getPokemonController } from 'main/factories/controllers/pokemon/get-pokemon-controller-factory/get-pokemon';
import { listAllPokemonsFacotry } from 'main/factories/controllers/pokemon/list-all-pokemons-controller-factory/list-all-pokemons';

import { addPokemonController } from '../factories/controllers/pokemon/add-new-pokemon-controller-factory/add-pokemon';

export default (r: Router): void => {
  r.post('/new', adapterRouter(addPokemonController()));
  r.get('/list', adapterRouter(listAllPokemonsFacotry()));
  r.get('/pokemon/:id', adapterRouter(getPokemonController()));
};
