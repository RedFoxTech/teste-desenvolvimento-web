
const directoryListing = require('./directoryListing')
const directoryConversion = require('./directoryConversion')
const dbInterface = require('./mongodb/dbInterface')

const storageModule = {}

storageModule.pathPokemons = "./res/pokemons"

storageModule.directoryListing = directoryListing.listing
storageModule.removeDirectoriesFromListing = directoryListing.removeDirectoriesFromListing
storageModule.resolveDirectory = directoryListing.resolveDirectory

storageModule.filePathToURL = directoryConversion.filePathToURL
storageModule.URLtoFilePath = directoryConversion.URLtoFilePath

storageModule.dbModel = dbInterface.dbModel
storageModule.dbConnector = dbInterface.dbConnector

module.exports = storageModule