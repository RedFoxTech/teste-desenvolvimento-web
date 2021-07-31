import {
  Request,
  Response,
  NextFunction,
  Router,
  RequestHandler,
} from 'express';
import RouteAbstract from './Route';

/* eslint-disable require-jsdoc */

/**
   * @filedescription Implementa a classe pai das rotas do sistema que
   * também possuem funções para interagir com todos os ítens.
   * @module packages/backend/routes/routesWithAll
   * @requires express
   * @see {@link packages/backend/routes/index}
   * @see {@link packages/backend/express/app}
   * @version 0.0.2
   * @since 29/07/2021
   */

/**
   * @description Classe abstrata que implementa as rotas básicas e também
   * as rotas para interagir com todos os ítens.
   * @abstract
   * @class
   * @name AbstractRoute
   */

abstract class RouteWithAllAbstract extends RouteAbstract {
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
                req: Request, res: Response, next: NextFunction): void

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

export default RouteWithAllAbstract;
