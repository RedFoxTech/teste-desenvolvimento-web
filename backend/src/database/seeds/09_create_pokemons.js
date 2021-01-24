const pokemons = require('../jsons/pokemons_10.json');

exports.seed = async function (knex) {

    return await knex('pokemons')
        .insert(pokemons);

}