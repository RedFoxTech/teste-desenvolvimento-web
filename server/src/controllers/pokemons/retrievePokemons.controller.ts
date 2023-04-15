import { Request, Response } from "express";
import { retrievePokemonService } from "../../services";

export const retrievePokemonController = async (req: Request, res: Response) => {
  const { pokemonID } = req.params;

  const retrivedPokemon = await retrievePokemonService(pokemonID);

  return res.status(200).json(retrivedPokemon);
};
