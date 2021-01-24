const pokemons = require('../jsons/pokemons_9.json');

exports.seed = async function (knex) {

    return await knex('pokemons')
        .insert(pokemons);

}