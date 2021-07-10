const mongoose = require("mongoose");
const { Schema } = mongoose;

const pokemonSchema = new Schema({
    name: String,
    pokedex_number: Number,
    img_name: String,
    generation: Number,
    evolution_stage: String,
    evolved: Number,
    family_id: Number,
    cross_gen: Number,
    type1: String,
    type2: String,
    weather1: String,
    weather2: String,
    stat_total: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    acquirable: Number,
    spawns: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    shiny: Number,
    nest: Number,
    new: Number,
    not_gettable: Number,
    future_evolve: Number,
    full_cp_40: Number,
    full_cp_39: Number,
})

module.exports = mongoose.model("Pokemon", pokemonSchema);
