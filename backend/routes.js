const { Router } = require('express');
const PokemonController = require('./controllers/PokemonController');

const routes = Router();

routes.post('/pokemons', PokemonController.store); 

module.exports = routes;