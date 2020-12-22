const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  id_pokemon: Number,
  img_pokemon: Number,
  name_pokemon: String,
  generation: Number,
  evolution_stage: Number,
  type_1: String,
  type_2: String,
  weather: String,
  ATK: Number,
  DEF: Number,
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
