const Pokemon = require('../models/pokemon')

const { getPostData } = require('../utils')

// @desc    Gets All Pokemons
// @route   GET /api/pokemons
async function getPokemons(req, res) {
    try {
        const pokemons = await Pokemon.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(pokemons))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single Pokemon by id
// @route   GET /api/pokemons/:id
async function getPokemon(req, res, id) {
    try {
        const pokemon = await Pokemon.findById(id)

        if (!pokemon) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Pokemon Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(pokemon))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Pokemons by name
// @route   GET /api/pokemons/:name
async function getPokemonByName(req, res, name) {
    try {
        const pokemons = await Pokemon.findByName(name);

        if (pokemons.length === 0) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Pokemon Not Found' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(pokemons));
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a Pokemon
// @route   POST /api/pokemons
async function createPokemon(req, res) {
    try {
        const body = await getPostData(req)

        const {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyID,
            crossGen,
            type1,
            type2,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            acquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isnewPokemon,
            notGettable,
            futureEvolve,
            maxCP40,
            maxCP39
        } = JSON.parse(body)

        const pokemon = {
            name,
            type1,
            type2,
            pokedexNumber,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyID,
            crossGen,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            acquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isnewPokemon,
            notGettable,
            futureEvolve,
            maxCP40,
            maxCP39
        }

        const newPokemon = await Pokemon.create(pokemon)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newPokemon))

    } catch (error) {
        console.log(error)
    }
}

// @desc    Update a Pokemon
// @route   PUT /api/pokemons/:id
async function updatePokemon(req, res, id) {
    try {
        const pokemon = await Pokemon.findById(id)

        if (!pokemon) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Pokemon Not Found' }))
        } else {
            const body = await getPostData(req)

            const { name, type, level } = JSON.parse(body)

            const pokemonData = {
                name: name || pokemon.name,
                type: type || pokemon.type,
                level: level || pokemon.level
            }

            const updPokemon = await Pokemon.update(id, pokemonData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updPokemon))
        }


    } catch (error) {
        console.log(error)
    }
}

// @desc    Delete Pokemon
// @route   DELETE /api/pokemons/:id
async function deletePokemon(req, res, id) {
    try {
        const pokemon = await Pokemon.findById(id)

        if (!pokemon) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Pokemon Not Found' }))
        } else {
            await Pokemon.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Pokemon ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPokemons,
    getPokemon,
    createPokemon,
    updatePokemon,
    deletePokemon,
    getPokemonByName
}