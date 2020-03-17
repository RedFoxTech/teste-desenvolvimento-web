const Pokemon = require('../models/Pokemon');

module.exports = {

    // Controller resposável pela visualização de todos os pokemons

    async index (req, res) {
        const pokemons = await Pokemon.find({});

        return res.json(pokemons);
    },

    // Controller resposável pelo cadastramento de novos pokemons

    async store (req, res) {
        const poke = req.body;                
        
        const pokemon = await Pokemon.create(poke);

        return res.json(pokemon)
    },

    async destroy (req, res) {

        console.log(req.params);

        const pokemon = await Pokemon.findByIdAndDelete();

        return res.json(pokemon);
    },

    async update(req, res) {
        const pokemon = await Pokemon.findByIdAndUpdate(req.params.row);
        return res.json(pokemon);
    }
}   