const Pokemon = require('../models/Pokemon');

module.exports = {

    async store (req, res) {

        const { row, name } = req.body;
    
        const pokemonResponse =  await Pokemon.create({
            row,
            name
        });   

        return res.json(pokemonResponse);
    }
}