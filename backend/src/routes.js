const { Router } = require('express');

const PokemonController = require('./app/controllers/PokemonController')

const routes = new Router();

routes.post('/pokemon', PokemonController.store);
routes.get('/pokemon', PokemonController.show);
routes.get('/pokemon/:id', PokemonController.index);


module.exports = routes;