import { PokemonsModel } from "../../models/Pokemons";
import { AppError } from "../../errors/AppError";
import { ICreatePokemon } from "../../interfaces/pokemons";

export const createPokemonsService = async (data: ICreatePokemon) => {
  console.log(data);
};
