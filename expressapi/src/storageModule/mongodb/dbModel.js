const mongoose = require('mongoose');

let schema = mongoose.Schema({
  name: String,
  pokedexnumber: Number,
  imgname: String,
  generation: Number,
  evolutionstage: Number,
  evolved: Number,
  familyid: Number,
  crossgen: Number,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  stattotal: Number,
  atk: Number,
  def: Number,
  sta: Number,
  legendary: Number,
  aquireable: Number,
  spawns: Number,
  regional: Number,
  raidable: Number,
  hatchable: Number,
  shiny: Number,
  nest: Number,
  newp: Number,
  notgettable: Number,
  futureevolve: Number,
  hundredcp40: Number,
  hundredcp39: Number
});


const dbModel = mongoose.model('pokemons', schema);

module.exports = dbModel;

