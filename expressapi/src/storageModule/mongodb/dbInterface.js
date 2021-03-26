const dbConnector = require('./dbConnector')
const dbModel = require('./dbModel')

const dbModule = {}

dbModule.dbModel = dbModel
dbModule.dbConnector = dbConnector

module.exports = dbModule