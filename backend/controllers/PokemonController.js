const Pokemon = require('../models/Pokemon');

module.exports = {

    // Controller resposável pela visualização de todos os pokemons

    async index (req, res) {
        const pokemons = await Pokemon.find();

        return res.json(pokemons);
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
        
        
        
    }
}   