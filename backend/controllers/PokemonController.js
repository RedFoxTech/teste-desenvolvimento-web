const Pokemon = require('../models/Pokemon');

module.exports = {

    // Controller resposável pela visualização de todos os pokemons

    async index (req, res) {
        const pokemons = await Pokemon.find({}).sort({row: 'asc'});

        return res.json(pokemons);
    },

    async show (req, res) {
        const row = req.params;
        const pokemon = await Pokemon.findById({row: Pokemon.row});

        return res.json(pokemon);
    },

    // Controller resposável pelo cadastramento de novos pokemons

    async store (req, res) {
        const poke = req.body;

        // Convertedo String em Array, e retirando possíveis espaços

        const weatherList = poke.weather_1.split('/').map(weather => weather.trim());

        poke.weather_1 = weatherList;       
        
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