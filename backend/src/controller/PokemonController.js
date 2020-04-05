const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {name_pokemon, id_pokedex, element_pokemon, secondary_element, evolution_stage} = request.body;

        await connection('pokemons').insert({
            name_pokemon,
            id_pokedex,
            element_pokemon,
            secondary_element,
            evolution_stage
        })
    },
}
