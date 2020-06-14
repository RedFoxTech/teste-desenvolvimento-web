import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonDatabase } from "../data/PokemonDatabase";

export class PokemonController {
  private static PokemomBusiness = new PokemonBusiness(
    new PokemonDatabase(),
  );

  async getAllPokemons(req: Request, res: Response) {
    const page = Number(req.query.page)
    try {
      const result = await PokemonController.PokemomBusiness.getAllPokemons(page);
      if (!result) {
        throw new Error("Nenhum resultado encontrado. Tente novamente!")
      }
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async pokemonFilter(req: Request, res: Response) {
    const name = req.query.filter as string
    const type = req.body.filterType
    try {
      const result = await PokemonController.PokemomBusiness.pokemonFilter(name, type);
      if (!result[0]) {
        throw new Error("Nenhum resultado encontrado. Tente novamente!")
      }
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async deletePokemon(req: Request, res: Response) {
    const pokemonId = req.body.pokemonId
    try {
      const result = await PokemonController.PokemomBusiness.deletePokemon(pokemonId);
      if (!result) {
        throw new Error("Id informada não existe no banco de dados")
      }
      res.status(200).send("Pokémon deletado com sucesso");
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
