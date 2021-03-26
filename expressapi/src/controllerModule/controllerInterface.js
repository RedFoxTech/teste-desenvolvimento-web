const storageModule = require('../storageModule/storageInterface')

const controllerModule = {}

// Any business module (created with DDD) can be added here, for further data processing

controllerModule.dbModel = storageModule.dbModel
controllerModule.dbConnector = storageModule.dbConnector

controllerModule.filePathToURL = storageModule.filePathToURL
controllerModule.pathPokemons = storageModule.pathPokemons
controllerModule.directoryListing = storageModule.directoryListing

module.exports = controllerModule
