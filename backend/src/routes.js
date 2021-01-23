const express = require('express');

const Routes = express.Router();

const UserController = require('./controllers/userController');
const PokemonsController = require('./controllers/pokemonsController');

Routes.post('/login', UserController.login); // Login de usuários.
Routes.post('/register', UserController.create); // Registrar usuários.
Routes.get('/list', UserController.index); // Listar usuários.

Routes.post('/newpokemon', PokemonsController.create);
Routes.get('/pokemons', PokemonsController.index);
Routes.put('/pokemon/:id', PokemonsController.update);
Routes.delete('/pokemon/:id', PokemonsController.delete);

Routes.post('/search', PokemonsController.search);

module.exports = Routes;