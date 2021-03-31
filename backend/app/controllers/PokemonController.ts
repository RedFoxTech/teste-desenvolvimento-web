import { Response, Request } from "express";
import Pokemon, { PokemonInterface } from "../models/Pokemon";

const getPokemons = async (req: Request, res: Response): Promise<void> => {
  try {
    const pokemons: PokemonInterface[] = await Pokemon.find({});
    res.json(pokemons);
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { getPokemons };
