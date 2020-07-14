const PokemonController = require('../controllers/PokemonController');
const pokemonController = new PokemonController();

module.exports = app => {
    app.route(pokemonController.route().getPost)
        .get(pokemonController.show())
        .post(pokemonController.save())
    
    app.route(pokemonController.route().editRemove)
        .delete(pokemonController.remove())
        .put(pokemonController.edit())
        .get(pokemonController.selectOne())

}