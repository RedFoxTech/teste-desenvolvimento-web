const express = require('express')
const routes = express.Router();
const PokemonController = require('../src/controller/PokemonController');

routes.post('/pokemon/new', PokemonController.create);

module.exports = routes;