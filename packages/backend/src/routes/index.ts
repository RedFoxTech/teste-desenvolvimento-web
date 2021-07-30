import {Request, Response, Application, Router} from 'express';
import PokedexRoute from './Pokedex';
import RouteAbstract from '../declarations/abstracts/Route';
import WatchSpreadSheet from '../middlewares/WatchSpreadSheet';

/**
 * @fileoverview Esse arquivo contém as rotas do ponto de entrada do backend,
 * que vão ser consumidas pela classe App.
 * @see {@link packages/backend/express/App}
 * @module packages/backend/routes/index
 * @requires express
 * @version 0.0.2
 */

const getRouter = (): Router => {
  const routes: Array<RouteAbstract> = [
    PokedexRoute,
  ];

  const router = Router();
  routes.forEach((route) => {
    router.use(route.basePath, route.router, WatchSpreadSheet);
  });

  return router;
};


export default getRouter;
