import { PokemonsModel } from "../../models/Pokemons";
import { AppError } from "../../errors/AppError";
import { ICreatePokemon } from "../../interfaces/pokemons";

export const createPokemonsService = async (data: ICreatePokemon) => {
  const foundPokemonName = await PokemonsModel.findOne({
    name: data.name,
  });

  const foundPokedex = await PokemonsModel.findOne({
    pokedexNumber: data.pokedexNumber,
  });

  if (foundPokemonName) {
    throw new AppError(400, "Pokemon name already registered");
  } else if (foundPokedex) {
    throw new AppError(400, "Pokedex number already in use");
  }

  const newPokemon = new PokemonsModel({
    name: data.name,
    pokedexNumber: data.pokedexNumber,
    imgName: data.imgName,
    generation: data.generation,
    evolutionStage: data.evolutionStage,
    evolved: data.evolved,
    familyID: data.familyID,
    crossGen: data.crossGen,
    type1: data.type1,
    type2: data.type2,
    weather1: data.weather1,
    weather2: data.weather2,
    statTotal: data.statTotal,
    atk: data.atk,
    def: data.def,
    sta: data.sta,
    legendary: data.legendary,
    aquireable: data.aquireable,
    spawns: data.spawns,
    regional: data.regional,
    raidable: data.raidable,
    hatchable: data.hatchable,
    shiny: data.shiny,
    nest: data.nest,
    new: data.new,
    notGettable: data.notGettable,
    futureEvolve: data.futureEvolve,
    cp40: data.cp40,
    cp39: data.cp39,
  });

  await newPokemon.save();

  return newPokemon;
};
