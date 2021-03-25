import { Router } from 'express';
import cors from 'cors';
import PokemonController from './app/controllers/PokemonController';


const routes = new Router();

routes.use(cors());

//pokemon
routes.get('/pokemon', PokemonController.get);
routes.post('/pokemon', PokemonController.store);
routes.put('/pokemon/:id', PokemonController.update);
routes.get('/pokemon/:id', PokemonController.index);

export default routes;
