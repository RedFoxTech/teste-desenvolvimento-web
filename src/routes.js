import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

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

routes.use(authMiddleware);

export default routes;
