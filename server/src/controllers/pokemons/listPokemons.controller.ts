import { Request, Response } from "express";
import { listPokemonsService } from "../../services";

export const listPokemonsController = async (req: Request, res: Response) => {
  const pokemonsList = await listPokemonsService();
  return res.status(200).json(pokemonsList);
};
