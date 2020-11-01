const { Router } = require('express');
const controllers = require('../controllers');

const pokemonRouter = Router();

pokemonRouter.get('/', controllers.getAllPokemonsController);

pokemonRouter.get('/:id/generation', controllers.getGenerationsByIdController);

pokemonRouter.get('/:id/stats', controllers.getStatsByIdController);

pokemonRouter.get('/:id/attributes', controllers.getAttributesByIdController);

pokemonRouter.get('/:id', controllers.getPokemonByIdController);

module.exports = pokemonRouter;
