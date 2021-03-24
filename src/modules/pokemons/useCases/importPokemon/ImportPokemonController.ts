import { Request, Response } from "express";

import { ImportPokemonUseCase } from "./ImportPokemonUseCase";

class ImportPokemonController {
  constructor(private importPokemonUseCase: ImportPokemonUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importPokemonUseCase.execute(file);
    return response.send();
  }
}

export { ImportPokemonController };