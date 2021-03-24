import { Request, Response } from "express";

import { ShowPokemonNameUseCase } from "./ShowPokemonNameUseCase";

class ShowPokemonNameController {
  constructor(private showPokemonNameUseCase: ShowPokemonNameUseCase) { }
  handle(request: Request, response: Response): Response {
    try {
      const { name } = request.params;

      const pokemonName = this.showPokemonNameUseCase.execute({ name });

      return response.status(200).send(pokemonName);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ShowPokemonNameController };