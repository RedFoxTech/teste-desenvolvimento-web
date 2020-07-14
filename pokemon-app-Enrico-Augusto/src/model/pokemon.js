const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pokemon = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },    
    habitat:{
        type: Schema.Types.ObjectId,
        ref: 'habitat'
    },
    type: [{
        type: Schema.Types.ObjectId,
        ref: 'type'        
    }],
    defeat_experience: {
        type: Number,        
    },
    height:{
        type: Number,        
    },
    weight:{
        type: Number
    }
})

mongoose.model('pokemon', Pokemon);