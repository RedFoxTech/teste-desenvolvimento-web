import express from 'express';

import PokemonController from './controllers/PokemonsController';
import InfosController from './controllers/InfosController';

const pkmController = new PokemonController();
const infosController = new InfosController();

const routes = express.Router();

routes.get('/pokemons', pkmController.all);

routes.get('/type/:type', pkmController.type);
routes.get('/weather/:weather', pkmController.weather);
routes.get('/search/:search', pkmController.find);

routes.get('/info/types/', infosController.types);
routes.get('/info/weathers/', infosController.weathers);

export default routes;