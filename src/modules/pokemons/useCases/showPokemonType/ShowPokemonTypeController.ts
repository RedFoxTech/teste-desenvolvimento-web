import { Request, Response } from "express";

import { ShowPokemonTypeUseCase } from "./ShowPokemonTypeUseCase";

class ShowPokemonTypeController {
  constructor(private showPokemonTypeUseCase: ShowPokemonTypeUseCase) { }
  handle(request: Request, response: Response): Response {
    try {
      const { type1, type2 } = request.body;

      const pokemonType = this.showPokemonTypeUseCase.execute({ type1, type2 });

      return response.status(200).send(pokemonType);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ShowPokemonTypeController };