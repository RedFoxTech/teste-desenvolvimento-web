import { Request, Response } from 'express';

import { ListPokemonsUseCase } from './ListPokemonsUseCase';

class ListPokemonsController {
  constructor(private listPokemonsUseCase: ListPokemonsUseCase) { }
  handle(request: Request, response: Response): Response {
    const all = this.listPokemonsUseCase.execute();

    return response.json(all)
  }
}

export { ListPokemonsController };