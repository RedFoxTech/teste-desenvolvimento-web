import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PokemonController from './app/controllers/PokemonController';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({
    title: 'Teste de desenvolvimento web RedFox',
    version: '0.0.1',
  });
});

/** Users */

routes.post('/users', UserController.store);

/** Sessions */
routes.post('/sessions', SessionController.store);

/** Authenticated middlweares */
routes.use(authMiddleware);
routes.post('/pokemons', PokemonController.store);
routes.post('/pokemons/:id', PokemonController.update);
routes.get('/pokemons', PokemonController.index);

export default routes;
