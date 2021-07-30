import {model, Schema, Document} from 'mongoose';
import PokemonModel from '../models/Pokemon';

/**
 * @filedescription Traz o schema da pokedex que idealmente refletirá a
 * planilha de pokémons.
 * @requires mongoose
 * @see {@link https://mongoosejs.com/docs/guide.html}
 * @see {@link packages/backend/models/Pokemon}
 * @module packages/backend/schemas/PokemonSchema
 * @version 0.0.1
 * @since 29/07/2021
 */

const pokemonSchema = new Schema({
  row: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pokedexId: {
    type: Number,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  generation: {
    type: String,
    required: true,
  },
  evolutionState: {
    type: String,
    required: true,
  },
  evolved: {
    type: Boolean,
    required: true,
  },
  familyId: {
    type: Number,
    required: false,
  },
  crossGeneration: {
    type: Boolean,
    required: true,
  },
  type1: {
    type: String,
    required: true,
  },
  type2: {
    type: String,
    required: false,
  },
  weather1: {
    type: String,
    required: true,
  },
  weather2: {
    type: String,
    required: false,
  },
  statsSum: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  staminaHP: {
    type: Number,
    required: true,
  },
  legendary: {
    type: Boolean,
    required: true,
  },
  acquirable: {
    type: Boolean,
    required: true,
  },
  spawns: {
    type: Boolean,
    required: true,
  },
  regional: {
    type: Boolean,
    required: true,
  },
  raidable: {
    type: Number,
    required: true,
  },
  shiny: {
    type: Boolean,
    required: true,
  },
  nest: {
    type: Boolean,
    required: true,
  },
  isNewPokemon: {
    type: Boolean,
    required: true,
  },
  notGettable: {
    type: Boolean,
    required: true,
  },
  futureEvolve: {
    type: Boolean,
    required: true,
  },
  fullCPLevel40: {
    type: Number,
    required: true,
  },
  fullCPLevel39: {
    type: Number,
    required: true,
  },
});

export default model<PokemonModel & Document>('pokemon', pokemonSchema);
