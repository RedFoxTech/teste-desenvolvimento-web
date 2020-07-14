const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Type = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,        
    },
    pokemon:[{
        type: Schema.Types.ObjectId,
        ref: 'pokemon'
    }],
    habitat:[{
        type: Schema.Types.ObjectId,
        ref: 'habitat'
    }]
})

mongoose.model('type', Type);