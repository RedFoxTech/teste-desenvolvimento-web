import { Router } from 'express';

import { PokemonController } from './controllers/PokemonController';

const routes = Router();

const pokemonController = new PokemonController();

routes.get('/pokemons', pokemonController.index);
routes.get('/pokemons/:id', pokemonController.show);
routes.post('/pokemons', pokemonController.store);
routes.put('/pokemons/:id', pokemonController.update);
routes.delete('/pokemons/:id', pokemonController.delete);

export { routes };