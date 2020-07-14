const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habitat = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    pokemon:[{
        type: Schema.Types.ObjectId,
        ref: 'pokemon',                
    }],
    type: [{
        type: Schema.Types.ObjectId,
        ref: 'type',
        require: false
    }]
})

mongoose.model('habitat', Habitat);