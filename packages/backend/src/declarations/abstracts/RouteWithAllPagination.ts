import {
  Request,
  Response,
  NextFunction,
  Router,
  RequestHandler,
} from 'express';
import RouteWithAllAbstract from './RouteWithAll';
/* eslint-disable require-jsdoc */

/**
 * @filedescription Implementa a classe pai das rotas do sistema que
 * também possuem funções para interagir com todos os ítens e paginar.
 * @module packages/backend/routes/routesWithAllPagination
 * @requires express
 * @see {@link module:packages/backend/routes/index}
 * @see {@link module:packages/backend/express/app}
 * @version 0.0.1
 * @since 06/08/2021
 */

abstract class RouteWithAllPaginationAbstract extends RouteWithAllAbstract {
    /** Middlewares para todas as rotas da classe */
    public middlewares: Array<RequestHandler> = [];
    /**
     * Caminho base onde todas as rotas definidas na classe filha serão
     * servidas
     */
    public basePath: string = '/';
    /** roteador do Express, esse nunca será subscrito pela classe filha */
    protected readonly _router = Router();

    /**
     * @name getRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract getRoute(
        req: Request, res: Response, next: NextFunction): void

    /**
     * @name getAllRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract getAllRoute(
        req: Request, res: Response, next: NextFunction): void


    /**
     * @name getPagesRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract getPagesRoute(
        req: Request, res: Response, next: NextFunction): void

    /**
     * @name postRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     * @description Deve retornar status code 201 em sucesso
     */
    protected abstract postRoute(
        req: Request, res: Response, next: NextFunction): void

    /**
     * @name putRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract putRoute(
        req: Request, res: Response, next: NextFunction): void

    /**
     * @name patchRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract patchRoute(
        req: Request, res: Response, next: NextFunction): void

    /**
     * @name deleteRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract deleteRoute(
        req: Request, res: Response, next: NextFunction): void

    // protected abstract optionsRoute(
    //    req: Request, res: Response, next: NextFunction): void
    // protected abstract headRoute(
    //    req: Request, res: Response, next: NextFunction): void

    /**
     * @name deleteAllRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
     */
    protected abstract deleteRoute(
        req: Request,
        res: Response,
        next: NextFunction
    ): void

    /**
   * @name getRoute
   * @memberOf AbstractRoute
   * @public
   * @return {Router} retorna o roteador para ser consumido pelo index
   * @see {@link packages/backend/routes/index}
   */
    public get router(): Router {
      return this._router;
    }
}

export default RouteWithAllPaginationAbstract;
