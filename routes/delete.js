const express = require('express')
const router = express.Router();
const common = require('../common/functions')
const deleteDatasource = require('../datasource/datasource-delete')
const Pokemon = require('../models/pokemon')

router.delete('/deletePokemon', (req, res) => {
    deleteDatasource.deleteOneByQuery({_id: req.query.id}).then(resp => {
        res.status(200).json({code: 200, msg: 'Pokémon was successfully deleted'})
    })
})


module.exports = router