const Pokemon = require('../models/Pokemon')


class Pokemons {

    async createPokemon(req, res) {
        try {   
            const pokemon = await Pokemon.create(req.body)

            return res.json({pokemon})
        } catch (err) {
            return res.status(400).json({error: 'Error creating new pokemon'})
        }
    }


    async getPokemons(req, res) {
        
        try {
            const pokemons = await Pokemon.find()

            return res.json({pokemons})

        } catch (err) {

            return res.status(400).json({error: 'Error loading pokemons'})
        }
        
    }


    async getOnePokemon(req, res) {
        try {
            const {id} = req.params

            const pokemon = await Pokemon.findById(id)

            return res.json({pokemon})

        } catch (err) {

            return res.status(400).json({error: 'Error loading pokemon'})
        }
        
    }


    async editPokemon(req, res) {
        try {
            const {id} = req.params
            const {name, type, description, image} = req.body

            const pokemon = await Pokemon.findByIdAndUpdate(id, {
                name: name,
                type: type,
                description: description,
                image: image
            }, {new: true })

            return res.status(200).json(pokemon)

        } catch (err) {

            return res.status(400).json({error: 'Error removing pokemon'})
        }

    }


    async deletePokemon(req, res) {
        try {
            const {id} = req.params

            await Pokemon.findByIdAndRemove(id)

            return res.json({message: 'Pokemon removed'})

        } catch (err) {

            return res.status(400).json({error: 'Error removing pokemon'})
        }
    }
}


module.exports = new Pokemons()