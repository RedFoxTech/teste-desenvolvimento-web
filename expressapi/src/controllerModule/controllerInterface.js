const storageModule = require('../storageModule/storageInterface')

const controllerModule = {}

// Any business module (created with DDD) can be added here, for further data processing

controllerModule.storageModule = storageModule

module.exports = controllerModule
