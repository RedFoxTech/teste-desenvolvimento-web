import { Request, Response } from "express";
import { CreatePokemonService } from "../services/CreatePokemonService";
import { GetPokemonsByUserId } from "../services/GetPokemonByUserId";
import { GetPokemonById } from "../services/GetPokemonById";
import { UpdatePokemon } from "../services/UpdatePokemon";
import { DeletePokemons } from "../services/DeletePokemons";

export class PokemonsController {
  async createPokemon(req: Request, res: Response) {
    try {
      const { userId } = req;
      const { name, pokedexNumber, type1, type2, weather1, weather2, atk, def } = req.body;

      const createPokemonService = new CreatePokemonService();

      const pokemon = await createPokemonService.execute({
        name,
        pokedexNumber,
        type1,
        type2,
        weather1,
        weather2,
        atk,
        def,
        userId,
      })

      return res.status(201).json(pokemon);
    } catch (error) {
      return res.status(500).json({message: 'Server Error'})
    }
  }

  async getPokemonsByUser(req: Request, res: Response) {
    try {
      const { userId } = req;
      const getPokemonsByUserId = new GetPokemonsByUserId();

      const pokemons = await getPokemonsByUserId.execute({
        userId,
      });

      return res.status(200).json(pokemons);
    } catch (error) {
      return res.status(500).json({message: 'Server Error'})
    }
  }

  async getPokemonsById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const getPokemonById = new GetPokemonById();

      const pokemon = await getPokemonById.execute({
        id,
      });

      return res.status(200).json(pokemon);

    } catch (error) {
      return res.status(500).json({message: 'Server Error'})
    }
  }

  async updatePokemon(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, pokedexNumber, type1, type2, weather1, weather2, atk, def } = req.body;

      const updatePokemon = new UpdatePokemon();

      await updatePokemon.execute({
        id, name, pokedexNumber, type1, type2, weather1, weather2, atk, def
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({message: 'Server Error'})
    }
  }

  async deletePokemons(req: Request, res: Response) {
    const { ids } = req.body;

    const deletePokemons = new DeletePokemons();

    await deletePokemons.execute({
      ids,
    });

    return res.status(204).send();
  }
}