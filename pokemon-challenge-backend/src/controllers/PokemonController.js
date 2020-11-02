const Pokemon = require('../models/Pokemon')
const axios = require('axios')

module.exports = {
    async index(req, res){
        const { page=1, limit=10 } = req.query

        const options = {
            page,
            sort:{ pokedexNum: 1 },
            limit,
            collation: {
              locale: 'en'
            }
        };

        const pokemons = await Pokemon.paginate({}, options)
        if(!pokemons){
            return res.status(404) 
        }
        return res.json(pokemons).status(200)
    },
    
    async findPokemonsName(req, res){
        const { name } = req.params
        const { page=1, limit=10 } = req.query

        const options = {
            page,
            sort:{ pokedexNum: 1 },
            limit,
            collation: {
              locale: 'en'
            }
        };

        const pokemons = await Pokemon.paginate({name: new RegExp('^' + name, 'i')}, options)
        if(!pokemons){
            return res.status(404) 
        }
        return res.json(pokemons)
    },
    async findPokemonsFilter(req, res){
        const { generations, types, eggs } = req.body
        const { page=1, limit=10 } = req.query
        console.log(req.body)
        const options = {
            page,
            sort:{ pokedexNum: 1 },
            limit,
            collation: {
              locale: 'en'
            }
        };

        const pokemons = await Pokemon.paginate({ 
            type: { $in: types },  
            generation: { $in:  generations },
            hatchable: { $in: eggs }
        }, options)

        if(!pokemons){
            return res.status(404) 
        }
        console.log(pokemons)
        return res.json(pokemons)
    },

    async store(req, res){
        const { name } = req.body
        let pokemon = await Pokemon.findOne({ name })
        if(!pokemon){
            pokemon = await Pokemon.create(req.body)
        }
        return res.json(pokemon)
    },

    async findPokemonPokedex(req, res){
        const { pokedexNum } = req.params
        const pokemon = await Pokemon.findOne({ pokedexNum })
        return res.json(pokemon)
    },
}