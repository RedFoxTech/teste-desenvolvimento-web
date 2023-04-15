import { PokemonsModel } from "../../models/Pokemons";
import { AppError } from "../../errors/AppError";

export const deletePokemonService = async (pokemonID: string) => {
  const foundPokemon = await PokemonsModel.findOne({ _id: pokemonID });

  if (!foundPokemon) {
    throw new AppError(404, "Pokemon not found");
  }

  return await PokemonsModel.deleteOne({ _id: foundPokemon.id });
};
