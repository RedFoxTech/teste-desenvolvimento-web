const Pokemon = require('../models/Pokemon');

module.exports = {

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