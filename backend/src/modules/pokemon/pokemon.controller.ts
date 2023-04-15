import { Request, Response } from "express";
import { PokemonService } from "./pokemon.service";
import { HttpError } from "@/helpers/HttpError";

export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  async findAllPokemons({ query }: Request, res: Response) {
    try {
      const pokemonsList = await this.pokemonService.findAllPokemons({
        name: query.name ? String(query.name) : undefined,
        offset: Number(query?.offset || 0),
        limit: Number(query?.limit || 10),
      });
      res.json(pokemonsList);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).json(error);
      }
      return error;
    }
  }

  async findOnePokemon(req: Request<{ pokemonId: string }>, res: Response) {
    const pokemonId = Number(req.params.pokemonId);
    try {
      const categoriesList = await this.pokemonService.findOnePokemon(
        pokemonId
      );
      res.json(categoriesList);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).json(error);
      }
      return error;
    }
  }
}
