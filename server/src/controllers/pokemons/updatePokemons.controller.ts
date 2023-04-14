import { Request, Response } from "express";
import { updatePokemonService } from "../../services";

export const updatePokemonController = async (req: Request, res: Response) => {
  const { pokemonID } = req.params;
  const data = req.body;

  const updatedPokemon = await updatePokemonService(pokemonID, data);

  return res.status(200).json({ message: "Pokemon updated with success." });
};
