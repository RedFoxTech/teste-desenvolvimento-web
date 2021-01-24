const pokemons = require('../jsons/pokemons_17.json');

exports.seed = async function (knex) {

    return await knex('pokemons')
        .insert(pokemons);

}