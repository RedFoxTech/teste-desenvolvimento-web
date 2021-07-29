import express from 'express';
import cors from 'cors';
import routes from '../routes';

/**
 * @fileoverview implementa a classe App, inicializa as rotas e middlewares do express
 * @see App
 * @see {@link packages/backend}
 * @see {@link packages/backend/routes/index}
 * @see {@link http://expressjs.com/en/5x/api.html}
 * @module packages/backend/express/App
 * @requires express
 * @requires cors
 * @requires packages/backend/routes/index
 * @since 29/07/2021
 * @version 0.0.1
 */

const appTsErro = (e : string) => {
  console.log(`App.ts erro: ${e}`);
};

/**
 * @class App
 * @classdesc Inicializa e configura o express
 */
class App {
  /**
   * @public
   * @readonly
   * @name app
   * @description App vira um valor falseavel caso o express tenha falhado
   */
  public readonly app : express.Application | undefined;

  /**
   * @constructor
   * @description inicializa express, middlewares e rotas
   * @throws {Error}
   */
  constructor() {
    try {
      this.app = express();
      if (!this.app) {
        throw new Error('express() falhou');
      }

      this.loadMiddleware();
      this.loadRoutes();
    } catch (e) {
      this.handleError(e);
      return;
    }
  }

  /**
   * @private
   * @name loadRoutes
   * @description aplique no express cada uma das rotas exportadas na array
   * de rotas do arquivo routes/index
   */
  private loadRoutes() : void {
    routes.forEach((route) => {
      route.setRoutes(<express.Application> (this.app));
    });
  }

  /**
   * @private
   * @name loadMiddleware
   * @description Registra os middlewares do YouSendr Mailer no express
   */
  private loadMiddleware() : void {
    if (!this.app) {
      /** Falhou ao inicializar express */
      appTsErro('Falha ao inicializar express!');
      return;
    }
    const app: express.Application = (this.app);

    /** Usado para receber e ler JSON nas APIs REST */
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    /** Habilita Cross-Origin Resource sharing para a API REST
     * {@link https://en.wikipedia.org/wiki/Cross-origin_resource_sharing}
     */
    app.use(cors());
  }

  /**
   * @private
   * @name handleError
   * @param {Error|object|string} e
   * Loga a mensagem de Erro no console para diversos tipos de erro
   */
  private handleError(e : unknown) : void {
    if (!e) {
      return;
    } // else
    if (typeof e === 'string') {
      appTsErro(e);

      return;
    } // else

    const error = <Record<string, string>>e;

    if (e instanceof Error ||
      /**
       * As vezes e tem message, mas nao eh instanceof error,
       * aproximacao duck-type
       */
      typeof e === 'object' &&
      typeof error.message === 'string'
    ) {
      appTsErro(error.message || 'Erro ao carregar express');
    }
  }
}

export default App;
