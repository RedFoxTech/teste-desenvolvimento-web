import {Request, Response, Application, NextFunction} from 'express';
import RouteAbstract from '../declarations/abstracts/Route';
import validationMiddleware from '../middlewares/ValidationDTO';
import WatchSpreadSheet from '../middlewares/WatchSpreadSheet';
import PokemonDTO from '../validatedDTOs/PokemonDTO';


/**
 * @fileoverview Esse arquivo irá conter as rotas para a CRUD do Pokedex.
 * @see {@link packages/backend/routes/index}
 * @requires express
 * @since 29/07/2021
 * @version 0.0.2
 */

// A documentação tá na classe RouteAbstract
/* eslint-disable require-jsdoc */

/**
 * @class
 * @extends RouteAbstract
 * @description Implementa a rota para acessar os Pokemons.
 */

class PokedexRoute extends RouteAbstract {
    middlewares = [
      WatchSpreadSheet,
    ];
    basePath = '/';

    constructor() {
      super();
      this._router.get('/', validationMiddleware(PokemonDTO), this.getRoute.bind(this));
    }

    protected getRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      res.status(200).send('Get works!');
      next();
    }

    protected postRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      return;
    }

    protected putRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      return;
    }

    protected patchRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      return;
    }

    protected deleteRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      return;
    }
}

export default new PokedexRoute();
