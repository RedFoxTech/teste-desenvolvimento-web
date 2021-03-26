//const mongoose = require('mongoose');
//const logger = require('../config/logger.js');
//const ObjectId = mongoose.Types.ObjectId;
const apiInsert = require('./apiInsert')
const apiFind = require('./apiFind')
const apiUpdate = require('./apiUpdate')
const apiDelete = require('./apiDelete')

const servicesInterface = {}

//create 
servicesInterface.insertPokemon = apiInsert.insertPokemon

//find 
//servicesInterface.findUniquePokemon = apiFind.findUniquePokemon
servicesInterface.findPokemonById = apiFind.findPokemonById
servicesInterface.findAllPokemonByProperty = apiFind.findAllPokemonByProperty

//update
servicesInterface.updatePokemonById = apiUpdate.updatePokemonById

//delete
servicesInterface.deletePokemonById = apiDelete.deletePokemonById
servicesInterface.removeAllPokemonByProperty = apiDelete.removeAllPokemonByProperty

module.exports = servicesInterface