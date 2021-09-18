import { Router } from 'express';
import { adapterRouter } from 'main/adapters/express-route-adapter';
import { deletePokemonController } from 'main/factories/controllers/pokemon/delete-pokemon-controller-factory/delete-pokemon';
import { getPokemonController } from 'main/factories/controllers/pokemon/get-pokemon-controller-factory/get-pokemon';
import { listAllPokemonsFacotry } from 'main/factories/controllers/pokemon/list-all-pokemons-controller-factory/list-all-pokemons';
import { updatePokemonController } from 'main/factories/controllers/pokemon/update-pokemon-controller-factory/add-pokemon';

import { addPokemonController } from '../factories/controllers/pokemon/add-new-pokemon-controller-factory/add-pokemon';

export default (r: Router): void => {
  r.post('/new', adapterRouter(addPokemonController()));
  r.get('/list', adapterRouter(listAllPokemonsFacotry()));
  r.get('/pokemon/:id', adapterRouter(getPokemonController()));
  r.delete('/pokemon/:id', adapterRouter(deletePokemonController()));
  r.patch('/pokemon/:id', adapterRouter(updatePokemonController()));
};
