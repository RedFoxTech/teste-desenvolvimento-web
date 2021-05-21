const express = require('express')

const loadPokemonRoutes = require('./pokemon')


const routes = express.Router()


loadPokemonRoutes(routes)


module.exports = routes