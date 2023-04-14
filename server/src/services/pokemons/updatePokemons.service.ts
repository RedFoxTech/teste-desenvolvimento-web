import { PokemonsModel } from "../../models/Pokemons";
import { AppError } from "../../errors/AppError";
import { IUpdatePokemon } from "../../interfaces/pokemons";

export const updatePokemonService = async (pokemonID: string, data: IUpdatePokemon) => {
  const foundPokemon: IUpdatePokemon | null = await PokemonsModel.findOne({ _id: pokemonID });

  if (!foundPokemon) {
    throw new AppError(404, "Pokemon not found");
  } else if (data._id) {
    throw new AppError(403, "Pokemon id cannot be updated");
  } else if (data.name) {
    throw new AppError(403, "Pokemon name cannot be updated");
  } else if (data.pokedexNumber) {
    throw new AppError(403, "Pokedex number cannot be updated");
  }

  const toFoundErrors: Array<IUpdatePokemon> = [];
  toFoundErrors.push(foundPokemon);

  toFoundErrors.map((item: any) => {
    for (const [key, value] of Object.entries(data)) {
      if (item[key] == value) {
        throw new AppError(400, `${key} cannot be updated with the same value`);
      }
    }
  });

  await PokemonsModel.updateOne({ _id: pokemonID }, { $set: { ...data } });

  return true;
};
