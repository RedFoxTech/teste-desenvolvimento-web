const mongoose = require('./connection')

const schema = new mongoose.Schema({
    name:{type:String, required: true},
    pokedexNumber:{type: Number, required: true},
    img:{type: String, required: true, default:"https://http2.mlstatic.com/colar-pingente-anime-geek-pokemon-pokebola-pokeball-esfera-D_NQ_NP_928688-MLB28019029999_082018-F.jpg"},
    generation:{type:Number, required: true, default: 1},
    evolutionStage:{type:Number, required: true, default: 1},
    FamilyId:{type:Number, required: true},
    Type1:{type:String, required: true},
    Type2:{type:String, default: ""},
    weather1:{type:String, required: true},
    weather2:{type:String, default: ""},
    atk:{type: Number, required: true, default:0 },
    def:{type:Number, required:true, default:0},
    sta:{type:Number, required:true, default:0},
    legendary:{type:Number, required: true, default:0},
    createdAt:{type: Date, default: Date.now}

})

const Poke = mongoose.model('Poke',schema)

module.exports = Poke