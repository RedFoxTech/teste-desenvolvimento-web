import { Response, Request } from 'express';

import { CreatePokemonUseCase } from './CreatePokemonUseCase';

class CreatePokemonController {
  constructor(private createPokemonUseCase: CreatePokemonUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { name, generation, evolution_stage, atk, def, type1, type2 } = request.body;

      const newPokemon = this.createPokemonUseCase.execute({ name, generation, evolution_stage, atk, def, type1, type2 });

      return response.status(201).send(newPokemon);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { CreatePokemonController }