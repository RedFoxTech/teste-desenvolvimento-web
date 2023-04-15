import { PokemonsModel } from "../../models/Pokemons";

export const listPokemonsService = async () => {
  const pokemonsList = await PokemonsModel.find({});

  return pokemonsList;
};
