import {Request, Response, Application, NextFunction} from "express";
import RouteAbstract from "../declarations/abstracts/Route";


/**
 * @fileoverview Esse arquivo irá conter as rotas para a CRUD do Pokedex.
 * @see {@link packages/backend/routes/index}
 * @requires express
 * @since 29/07/2021
 * @version 0.0.1
 */

class PokedexRoute extends RouteAbstract {
    basePath = '/';

    constructor() {
        super();
        this._router.get('/', this.getRoute.bind(this));
    }

    protected getRoute(req: Request, res: Response, next: NextFunction): void {
        res.status(200).send('Get works!')
        next();
    }

    protected postRoute(req: Request, res: Response, next: NextFunction): void {
        return
    }

    protected putRoute(req: Request, res: Response, next: NextFunction): void {
        return
    }

    protected patchRoute(req: Request, res: Response, next: NextFunction): void {
        return
    }

    protected deleteRoute(req: Request, res: Response, next: NextFunction): void {
        return
    }
}

export default new PokedexRoute();
