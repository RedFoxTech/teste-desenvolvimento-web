import { Request, Response } from "express";
import { deletePokemonService } from "../../services";

export const deletePokemonController = async (req: Request, res: Response) => {
  const { pokemonID } = req.params;

  const deletedPokemon = await deletePokemonService(pokemonID);

  return res.status(200).json({ message: "Pokemon deleted with success." });
};
