const { text } = require('body-parser');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
   name: {
         type: String,
         required: true
    }, 
    pokedexnumber: {
        type: Number,
    },
    password: {
        type: String,
       
    },
    imgname: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    generation: {
        type: Number
    },
    evolutionstage: {
        type: String
    },
    evolved: {
        type: Number
    },
    familyid: {
        type: Number
    } ,
    crossgen: {
        type: Number
    },
    type1: {
        type: String
    },
    type2: {
        type: String
    },
    weather1: {
        type: String
    },
    weather2: {
        type: String
    },
    stattotal: {
        type: Number
    },
    atk: {
        type: Number
    },
    def: {
        type: Number
    }, 
    sta: {
        type: Number
    },
    legendary: {
        type: Number
    },
    aquireable: {
        type: Number
    },
    spawns: {
        type: Number
    },
    regional: {
        type: Number
    },
    raidable: {
        type: Number
    },
    hatchable: {
        type: Number
    },
    shiny: {
        type: Number
    },
    nest: {
        type: Number
    },
    new: {
        type: Number
    },
    notgettable: {
        type: Number
    },
    futureevolve: {
        type: Number
    },
    cemcp40: {
        type: Number
    },
    cemcp39: {
        type: Number
    }

});

const User = mongoose.model('user', UserSchema)

module.exports = User;
