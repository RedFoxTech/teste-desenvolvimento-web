const Pokemon = require('../models/pokemon')

async function updateByQuery(find, set) {
    try {
        return Pokemon.update(find, set, { multi: true })
    } catch (error) {
        throw new Error(`Unable to update Pokémon`)
    }
}

module.exports =  {
    updateByQuery
}