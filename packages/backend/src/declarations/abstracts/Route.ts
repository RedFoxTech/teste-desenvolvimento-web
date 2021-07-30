import {Request, Response, NextFunction, Router} from 'express';

/**
 * @filedescription Implementa a classe pai de todas as rotas do sistema.
 * todas as rotas devem ser filhas dessa classe e o contrato dela é
 * indispensável para ser consumida pelo App
 * @requires express
 * @see {@link packages/backend/routes/index}
 * @see {@link packages/backend/express/app}
 * @version 0.0.1
 * @since 29/07/2021
 */

export default abstract class RouteAbstract {
    public basePath: string = '/';
    protected _router = Router();

    protected abstract getRoute(req: Request, res: Response, next: NextFunction): void
    protected abstract postRoute(req: Request, res: Response, next: NextFunction): void
    protected abstract putRoute(req: Request, res: Response, next: NextFunction): void
    protected abstract patchRoute(req: Request, res: Response, next: NextFunction): void
    protected abstract deleteRoute(req: Request, res: Response, next: NextFunction): void
    // protected abstract optionsRoute(req: Request, res: Response, next: NextFunction): void
    // protected abstract headRoute(req: Request, res: Response, next: NextFunction): void

    public get router(): Router {
      return this._router;
    }
}
