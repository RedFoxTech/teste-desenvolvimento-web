const multer = require('multer');
const express = require('express');
const apiRouter = express.Router();
const apiService = require('../services/servicesInterface');


//create 
apiRouter.post('/pokemon', apiService.insertPokemon);

//find 
//apiRouter.post('/pokemon/unique', apiService.findUniquePokemon);
apiRouter.get('/pokemon/:id', apiService.findPokemonById);
apiRouter.get('/pokemons/', apiService.findAllPokemonByProperty);

//update
apiRouter.put('/pokemon/:id', apiService.updatePokemonById);

//delete
apiRouter.delete('/pokemon/:id', apiService.deletePokemonById);
apiRouter.delete('/pokemons/', apiService.removeAllPokemonByProperty);

module.exports = apiRouter;
