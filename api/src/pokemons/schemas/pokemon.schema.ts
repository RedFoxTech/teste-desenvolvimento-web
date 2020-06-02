import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
  name: String,
});