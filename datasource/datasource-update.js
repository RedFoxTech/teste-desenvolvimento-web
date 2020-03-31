const Pokemon = require('../models/pokemon')

async function updateByQuery(find, set) {
    try {
        return Pokemon.updateOne(find, set)
    } catch (error) {
        throw new Error(`Unable to update Pokémon`)
    }
}

module.exports =  {
    updateByQuery
}