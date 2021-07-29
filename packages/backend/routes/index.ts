import {Request, Response, Application} from "express";

/**
 * @fileoverview Esse arquivo contém as rotas do ponto de entrada do backend,
 * que vão ser consumidas pela classe App.
 * @see {@link packages/backend/express/App}
 * @module packages/backend/routes/index
 * @requires express
 */

export default class PostRoutes {

  public setRoutes(app: Application): void {

    app.get('/', (req: Request, res: Response) => {
      res.status(200).send('It works!')
    })
  }
}
