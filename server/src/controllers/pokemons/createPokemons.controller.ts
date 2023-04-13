import { Request, Response } from "express";
import { createPokemonsService } from "../../services";

export const createPokemonController = async (req: Request, res: Response) => {
  const data = req.body;

  const newPokemon = await createPokemonsService(data);

  return res.status(201).json(newPokemon);
};
