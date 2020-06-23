import express, { request, response } from 'express';

import PokemonsController from './controllers/pokemonsController';
import ListController from './controllers/ListController';

const routes = express.Router();
const pokemonsController = new PokemonsController();
const listController = new ListController();

routes.post('/create', pokemonsController.create);

routes.get('/pokemons', listController.index);
routes.get('/pokemons/:id', listController.show);

export default routes;