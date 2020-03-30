const express = require('express')
const router = express.Router();
const common = require('../common/functions')
const updateDatasource = require('../datasource/datasource-update')


router.put('/updatePokemonsByQuery', function(req, res) {
    if (!req.body.find_query) {
        res.status(400).json({
            code: 400,
            msg: `invalid body: missing "find_query"`
        })
        return
    }
    
    const findQuery = req.body.find_query
    let validation = common.validateQuery(findQuery, common.queryValidEntries)
    if (!validation.isValid) {
        res.status(400).json({
            code: 400,
            msg: validation.msg
        })
        return
    }

    const setQuery = req.body.set_query
    validation = common.validateQuery(setQuery, common.queryValidEntries)
    if (!validation.isValid) {
        res.status(400).json({
            code: 400,
            msg: validation.msg
        })
        return
    }

    updatePokemonsByQuery(findQuery, {$set: setQuery}).then(resp => {
        res.status(resp.code).json(resp)
    })
})

const updatePokemonsByQuery = async (find, set) => {
    const pokemon = await updateDatasource.updateByQuery(find, set)
    if (pokemon.nModified > 0) {
        return {
            code: 200,
            msg: `Pokémon modificado com sucesso!.`,
            pokemon: pokemon
        }
    }
    return {
        code: 500,
        msg: `Pokémon inexistente no banco de dados ou não foi possivel fazer o update.`,
    }
}

module.exports = router