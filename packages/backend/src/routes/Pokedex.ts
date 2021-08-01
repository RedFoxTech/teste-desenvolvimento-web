import {Request, Response, NextFunction} from 'express';
import RouteWithAllAbstract from '../declarations/abstracts/RouteWithAll';
import validationMiddleware from '../middlewares/ValidationDTO';
import WatchSpreadSheet from '../middlewares/WatchSpreadSheet';
import PokemonDTO from '../validatedDTOs/PokemonDTO';
import PokemonRepository from '../repositories/Pokemon';
import PokemonPartialDTO from '../validatedDTOs/PokemonPartialDTO';
import ImportSpreadsheet from '../services/ImportSpreadsheet';


/**
 * @fileoverview Esse arquivo irá conter as rotas para a CRUD do Pokedex.
 * @see {@link packages/backend/routes/index}
 * @see {@link packages/backend/repositories/Pokemon}
 * @requires express
 * @since 29/07/2021
 * @version 0.0.6
 */

// A documentação tá na classe RouteAbstract

/**
 * @class
 * @extends RouteWithAllAbstract
 * @description Implementa a rota para acessar os Pokemons.
 */

class PokedexRoute extends RouteWithAllAbstract {
    middlewares = [
      WatchSpreadSheet,
    ];
    basePath = '/Pokemon';
    private pokemonRepository = new PokemonRepository();

    constructor() {
      super();
      this._router.post('/createOne',
          validationMiddleware(PokemonDTO),
          this.postRoute.bind(this),
      );
      this.router.post('/importAll', this.importAllRoute.bind(this));
      this._router.get('/getOne/:id', this.getRoute.bind(this));
      this._router.get('/getAll', this.getAllRoute.bind(this));
      this._router.put('/updateOne(/:id)?',
          validationMiddleware(PokemonDTO),
          this.putRoute.bind(this),
      );
      this._router.patch('/updateOne/:id',
          validationMiddleware(PokemonPartialDTO, true),
          this.patchRoute.bind(this),
      );
      this._router.delete('/deleteOne/:id', this.deleteRoute.bind(this));
      this._router.delete('/deleteAll', this.deleteAllRoute.bind(this));
    }

    protected async postRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const data = req.body || {};
        const pokemon = await this.pokemonRepository.create(data);
        res.status(201).json(pokemon);
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }


    /**
    * @async
    * @protected
    * @param {Request} req
    * @param {Response} res
    * @param {NextFunction} next
    * @description Este método é responsável por importar todos os Pokemons
    * da spreadsheet, essa ação não destrói os  Pokémons que já existem no
    * banco de dados.
    */
    protected async importAllRoute(
      req: Request,
      res: Response,
      next: NextFunction,
  ) {
    try {
      const success = await ImportSpreadsheet();

      res.status(201).json({success});
    } catch (httpException) {
      res.status(httpException.status || 500).json(
          {error: httpException.message},
      );
    }
    next();
  }

    protected async getRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const {id = ''} = req.params;
        const pokemon = await this.pokemonRepository.read(id);
        res.status(200).json(pokemon);
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }

    protected async getAllRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const pokemon = await this.pokemonRepository.readAll();
        res.status(200).json(pokemon);
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }

    protected async patchRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const {id} = req.params;
        const data = req.body || {};
        const pokemon = await this.pokemonRepository.updatePartialProperties(
            id,
            data,
        );
        res.status(200).json(pokemon);
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }

    protected async putRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const {id} = req.params;

        if (!id) {
          // cria um novo pokemon
          this.postRoute(req, res, next);
          return;
        }

        const data = req.body || {};
        const pokemon = await this.pokemonRepository.updateAllProperties(
            id,
            data,
        );
        res.status(200).json(pokemon);
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }

    protected async deleteRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const {id = ''} = req.params;
        const success = await this.pokemonRepository.delete(id);

        res.status(200).json({success});
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }

    protected async deleteAllRoute(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
      try {
        const success = await this.pokemonRepository.deleteAll();

        res.status(200).json({success});
      } catch (httpException) {
        res.status(httpException.status || 500).json(
            {error: httpException.message},
        );
      }
      next();
    }
}

export default new PokedexRoute();
