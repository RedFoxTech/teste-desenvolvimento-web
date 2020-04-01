const express = require('express')
const router = express.Router();
const common = require('../common/functions')
const Pokemon = require('../models/pokemon')

router.get('/pokemons', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

router.post('/pokemons', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

router.post('/pokemons/name', common.paginationMiddleware(Pokemon), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

module.exports = router