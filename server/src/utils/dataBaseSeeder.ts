import { predefinedPokemonData } from "./pokemonsData";
import { PokemonsModel } from "../models/Pokemons";

const dataBaseSeeder = async () => {
  return await PokemonsModel.insertMany(predefinedPokemonData);
};

export default dataBaseSeeder;
