import mongoose from "mongoose";
import { ICreatePokemon } from "../interfaces/pokemons";

const pokemonSchema = new mongoose.Schema<ICreatePokemon>({
  name: {
    type: String,
    unique: true,
    required: [true, "Pokemon must have a name"],
  },
  pokedexNumber: {
    type: Number,
    unique: true,
    required: [true, "Required Field!"],
  },
  imgName: {
    type: String,
    required: [true, "Required Field!"],
  },
  generation: {
    type: Number,
    required: [true, "Required Field!"],
  },
  evolutionStage: {
    type: String,
    enum: {
      values: ["1", "2", "3", "Evolved", "Lower"],
      message: "{VALUE} is not supported",
    },
  },
  evolved: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "{VALUE} is not supported, must be 0 or 1",
    },
  },
  familyID: {
    type: Number,
  },
  crossGen: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "{VALUE} is not supported, must be 0 or 1",
    },
  },
  type1: {
    type: String,
    required: [true, "Required Field!"],
    enum: {
      values: [
        "grass",
        "fire",
        "water",
        "bug",
        "normal",
        "poison",
        "eletric",
        "ground",
        "fairy",
        "fighting",
        "psychic",
        "rock",
        "ghost",
        "ice",
        "dragon",
        "dark",
        "steel",
        "flying",
      ],
      message: "{VALUE} is not supported",
    },
  },
  type2: {
    type: String,
    enum: {
      values: [
        "grass",
        "fire",
        "water",
        "bug",
        "normal",
        "poison",
        "eletric",
        "ground",
        "fairy",
        "fighting",
        "psychic",
        "rock",
        "ghost",
        "ice",
        "dragon",
        "dark",
        "steel",
        "flying",
      ],
      message: "{VALUE} is not supported",
    },
  },
  weather1: {
    type: String,
    required: [true, "Required Field!"],
    enum: {
      values: [
        "Sunny/clear",
        "Rainy",
        "Partly cloud",
        "Cloudy",
        "Windy",
        "Fog",
        "Snow",
      ],
      message: "{VALUE} is not supported",
    },
  },
  weather2: {
    type: String,
    enum: {
      values: [
        "Sunny/clear",
        "Rainy",
        "Partly cloud",
        "Cloudy",
        "Windy",
        "Fog",
        "Snow",
      ],
      message: "{VALUE} is not supported",
    },
  },
  statTotal: {
    type: Number,
    required: [true, "Required Field!"],
  },
  atk: {
    type: Number,
    required: [true, "Required Field!"],
  },
  def: {
    type: Number,
    required: [true, "Required Field!"],
  },
  sta: {
    type: Number,
    required: [true, "Required Field!"],
  },
  legendary: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1, 2],
      message: "Must be 0, 1 or 2, got {VALUE}",
    },
  },
  aquireable: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1, 2, 3],
      message: "Must be 0, 1, 2 or 3, got {VALUE}",
    },
  },
  spawns: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  regional: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  raidable: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1, 2, 3, 4, 5],
      message: "Must be 0, 1, 2, 3, 4 or 5, got {VALUE}",
    },
  },
  hatchable: {
    type: Number,
    required: [true, "Required Field!"],
    max: [15, "Range 0 to 15, got {VALUE}"],
  },
  shiny: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  nest: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  new: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  notGettable: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  futureEvolve: {
    type: Number,
    required: [true, "Required Field!"],
    enum: {
      values: [0, 1],
      message: "Must be 0 or 1, got {VALUE}",
    },
  },
  cp40: {
    type: Number,
    required: [true, "Required Field!"],
  },
  cp39: {
    type: Number,
    required: [true, "Required Field!"],
  },
});

export const PokemonsModel = mongoose.model<ICreatePokemon>(
  "Pokemons",
  pokemonSchema
);
