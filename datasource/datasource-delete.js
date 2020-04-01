const Pokemon = require('../models/pokemon')

async function deleteOneByQuery(query) {
    try {
        return Pokemon.deleteOne(query)
    } catch (error) {
        throw new Error(`Unable to deleting Pokémon`)
    }
}


module.exports = {
    deleteOneByQuery
}