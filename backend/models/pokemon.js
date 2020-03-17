const mongoose = require('mongoose');

const PokemonSchema  = new mongoose.Schema({
    row: Number,
    name: {type: String, required: false, trim: true},
    pokedex_number: Number,
    img_name: String,
    generation: Number,
    evolution_stage: Number,
    evolved: Number,
    family_id: Number,
    cross_gen: Number,
    type_1: String,
    type_2: String,
    weather_1: String,
    weather_2: String,
    stat_total: Number,
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
    rew: Number,
    not_gettable: Number,
    future_evolve: Number,
    CP_40: Number,
    CP_39: Number
});

module.exports = mongoose.model('Pokemon', PokemonSchema);