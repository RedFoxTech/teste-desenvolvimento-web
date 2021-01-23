const pokemons = require('../jsons/pokemons_15.json');

exports.seed = async function (knex) {

    return await knex('pokemons')
        .insert(pokemons);

}