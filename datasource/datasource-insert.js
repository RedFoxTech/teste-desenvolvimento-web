const Pokemon = require('../models/pokemon')

async function insertManyPokemons(pokemons) {
    try {
        return Pokemon.collection.insertMany(pokemons, function(err, docs){
            if (err) {
                return console.error(err)
            } 
            
            console.log('Um ou varios Pokémons foram adicionados ao banco de dados')
        })
    } catch(error) {
        throw new Error(`Unable to insert Pokémons`)
    }
}

module.exports = {
    insertManyPokemons
}