const express = require('express')
const router = express.Router();
const common = require('../common/functions')
const getDatasource = require('../datasource/datasource-get')
const Pokemon = require('../models/pokemon')

router.get('/getAllPokemons', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

router.post('/getPokemonsByQuery', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

router.post('/getPokemonByName', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

module.exports = router