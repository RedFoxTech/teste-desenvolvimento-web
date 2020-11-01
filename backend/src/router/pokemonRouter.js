const { Router } = require('express');
const controllers = require('../controllers');

const pokemonRouter = Router();

pokemonRouter.get('/', controllers.getAllPokemonsController);
// pokemonRouter.get('/:id');
// pokemonRouter.get('/:id/generations');
// pokemonRouter.get('/:id/stats');
// pokemonRouter.get('/:id/attributes');

module.exports = pokemonRouter;
