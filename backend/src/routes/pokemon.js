const PokemonController = require('../controllers/PokemonController')

module.exports = routes => {
    routes.get('/pokemons', PokemonController.get)
}