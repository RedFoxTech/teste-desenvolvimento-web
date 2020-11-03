const { Router } = require('express')
const routes = Router()
const PokemonController = require('./controllers/PokemonController')

routes.get('/', (req, res) => {
    return res.json({ message: 'Aplication ON' })
})

routes.get('/pokemons', PokemonController.index)
routes.get('/pokemons/:name', PokemonController.findPokemonsName)
routes.post('/pokemons/filter', PokemonController.findPokemonsFilter)
routes.get('/pokemons/:name', PokemonController.findPokemonsName)
routes.post('/pokemon', PokemonController.store)
routes.get('/pokemon/:pokedexNum', PokemonController.findPokemonPokedex)

module.exports = routes