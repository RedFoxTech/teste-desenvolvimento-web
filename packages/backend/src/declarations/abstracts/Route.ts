import {
  Request,
  Response,
  NextFunction,
  Router,
  RequestHandler,
} from 'express';

/* eslint-disable require-jsdoc */

/**
 * @filedescription Implementa a classe pai de todas as rotas do sistema.
 * todas as rotas devem ser filhas dessa classe e o contrato dela é
 * indispensável para ser consumida pelo App
 * @module packages/backend/routes
 * @requires express
 * @see {@link packages/backend/routes/index}
 * @see {@link packages/backend/express/app}
 * @version 0.0.2
 * @since 29/07/2021
 */

/**
 * @description Classe abstrata que deve ser extendida por todas as rotas
 * do sistema. Todos os métodos devem ser implementados, mas podem estar
 * vazios, pois a única forma que encontrei de fazer eles seram opcionais
 * é utilizando uma interface, que forçaria os contratos a serem públicos.
 * @abstract
 * @class
 * @name AbstractRoute
 */

abstract class RouteAbstract {
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
     * @name postRoute
     * @memberOf AbstractRoute
     * @protected
     * @abstract
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {void}
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

export default RouteAbstract;
