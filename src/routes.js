import { Router } from 'express';
import multer from 'multer';
import authMiddleware from './app/middlewares/auth';
import uploadConfig from './config/upload';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PokemonController from './app/controllers/PokemonController';
import UpdatePokemonImageController from './app/controllers/UpdatePokemonImageController';

const routes = new Router();
const upload = multer(uploadConfig);

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
routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);
routes.post('/pokemons', PokemonController.store);
routes.patch('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.destroy);
routes.patch(
  '/pokemons/:id/image',
  upload.single('file'),
  UpdatePokemonImageController.update
);

export default routes;
