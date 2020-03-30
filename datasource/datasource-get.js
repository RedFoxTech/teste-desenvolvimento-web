const Pokemon = require('../models/pokemon')

async function findOneByQuery(query) {
    try {
        return Pokemon.findOne(query)
    } catch (error) {
        throw new Error(`Unable to find Pokémon`)
    }
}

async function findManyByQuery(query) {
    try {
        return Pokemon.find(query)
    } catch (error) {
        throw new Error(`Unable to find Pokémons`)
    }
}


module.exports = {
    findOneByQuery,
    findManyByQuery
}