import express from 'express';

import PokemonController from './controllers/PokemonsController';

const routes = express.Router();

/** New Controller */
const pokemonController = new PokemonController();

/** Pokemon Routes */
routes.get('/pokemons', pokemonController.index);
routes.get('/pokemons/:id', pokemonController.show);
routes.post('/pokemons', pokemonController.create);
routes.put('/pokemons/:id', pokemonController.update);
routes.delete('/pokemons/:id', pokemonController.delete);

export default routes;