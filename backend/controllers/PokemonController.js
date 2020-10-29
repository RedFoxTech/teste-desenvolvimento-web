const Pokemon = require('../models/Pokemon')


class Pokemons {

    createPokemon(req, res) {
        const {name, type, description, image} = req.body

        Pokemon.create({
            name: name,
            type: type,
            description: description,
            image: image
        }).then(pokemon => res.status(200).json(pokemon))
    }

    getPokemons(req, res) {
        
        Pokemon.findAll().then(pokemons => res.status(200).json(pokemons))
    }

    getOnePokemon(req, res) {

        const {id} = req.params

        Pokemon.findOne({where: {id: id}}).then(pokemon => res.status(200).json(pokemon))
    }
}


module.exports = new Pokemons()