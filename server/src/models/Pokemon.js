//Importando banco de dados para implementação e criação de modelo de dados.
const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    pokedexNumber: {
        type: Number,
        required: true
    },
    imgName: {
        type: String,
        required: true,
    },
    generation: {
        type: Number,
        required: true
    },
    evolutionState: {
        type: String,
        required: true
    },
    evolved: {
        type: Boolean,
        required: true,
    },
    familyId: {
        type: Number
    },
    crossGen: {
        type: Boolean,
        required: true
    },
    type1: {
        type: String,
        required: true,
    },
    type2: {
        type: String
    },
    weather1: {
        type: String,
        required: true
    },
    weather2: {
        type: String
    },
    atk: {
        type: Number,
        required: true,
    },
    def: {
        type: Number,
        required: true,
    },
    sta: {
        type: Number,
        required: true,
    },
    totalStat: {
        type: Number,
    },
    legendary: {
        type: Boolean,
        required: true,
    },
    aquireable: {
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
    hatchable: {
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
    isNoveau: {
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
    IV40: {
        type: Number,
        required: true
    },
    IV39: {
        type: Number,
        required: true
    },

})

PokemonSchema.pre('save', async function(next){
    const stats = this.atk + this.def + this.sta;
    this.totalStat = stats;

    next();
});

module.exports = mongoose.model('Pokemon', PokemonSchema);

