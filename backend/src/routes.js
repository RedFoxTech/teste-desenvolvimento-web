const express = require('express')
const routes = express.Router()

const PokemonsController = require('../controllers/PokemonController')


routes.get('/pokemons', PokemonsController.getPokemons)
routes.get('/pokemon/:id', PokemonsController.getOnePokemon)
routes.post('/pokemon', PokemonsController.createPokemon)

module.exports = routes