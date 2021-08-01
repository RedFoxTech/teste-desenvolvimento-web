import {Router} from 'express';
import PokedexRoute from './Pokedex';
import RouteAbstract from '../declarations/abstracts/Route';
import RouteWithAllAbstract from '../declarations/abstracts/RouteWithAll';

/**
 * @fileoverview Esse arquivo contém as rotas do ponto de entrada do backend,
 * que vão ser consumidas pela classe App.
 * @see {@link packages/backend/express/App}
 * @module packages/backend/routes/index
 * @requires express
 * @version 0.0.3
 */

const mainRouter = (): Router => {
  /** Para atualizar rotas, apenas insira uma rota nessa Array */
  const routes: Array<RouteAbstract|RouteWithAllAbstract> = [
    PokedexRoute,
  ];

  const router = Router();
  routes.forEach((route) => {
    router.use(route.basePath, route.router, ...route.middlewares);
  });

  return router;
};

export default mainRouter;
