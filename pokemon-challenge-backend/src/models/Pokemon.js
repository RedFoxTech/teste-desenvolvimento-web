const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const PokemonSchema = new mongoose.Schema({
    pokedexNum: Number,
    name: String,
    imgName: String,
    generation: Number,
    evolutionStage: Number,
    evolved: Number, 
    familyId: Number,
    crossGen: Number,
    type: [String],
    weather: [String],
    statsTotal: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aquierable: Number,
    spaws: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    skiny: Number,
    nest: Number,
    new: Number,
    notGettable: Number,
    futureEvolve: Number,
    cp40: Number,
    cp39: Number,
})

PokemonSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pokemon', PokemonSchema)