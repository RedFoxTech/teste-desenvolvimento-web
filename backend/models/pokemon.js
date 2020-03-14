const mongoose = require('mongoose');

const PokemonSchema  = new mongoose.Schema({
    Row: Number,
    Name: String,
    Pokedex_Number: Number,
    Img_name: Number,
    Generation: Number,
    Evolution_Stage: Number,
    Evolved: Number,
    FamilyID: Number,
    Cross_Gen: Number,
    Type_1: String,
    Type_2: String,
    Weather_1: [String],
    Weather_2: String,
    STAT_TOTAL: Number,
    ATK: Number,
    DEF: Number,
    STA: Number,
    Legendary: Number,
    Aquireable: Number,
    Spawns: Number,
    Regional: Number,
    Raidable: Number,
    Hatchable: Number,
    Shiny: Number,
    Nest: Number,
    New: Number,
    Not_Gettable: Number,
    Future_Evolve: Number,
    CP_40: Number,
    CP_39: Number
});

module.exports = mongoose.model('Pokemon', PokemonSchema);