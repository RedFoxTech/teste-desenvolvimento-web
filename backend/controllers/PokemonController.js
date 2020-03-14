const Pokemon = require('../models/Pokemon');

module.exports = {

    async index (req, res) {
        const pokemons = await Pokemon.find();

        return res.json(pokemons);
    },

    async store (req, res) {

        const { row, name } = req.body;

        let pokemon = await Pokemon.findOne({ name });

        if (!pokemon) {
            pokemon =  await Pokemon.create({
                row,
                name
            }); 
        }

        return res.json(pokemon);
    }
}