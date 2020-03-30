const express = require('express')
const router = express.Router();
const Pokemon = require('../models/pokemon')
const mongoose = require('mongoose')
const common = require('../common/functions')
const insertDatasource = require('../datasource/datasource-insert')
const findDatasource = require('../datasource/datasource-get')

router.put('/insertManyPokemons', function (req, res) {
    let pokemons = []

    const findAndInsertPokemons = async () => {
        let response

        await common.asyncForEach(req.body.pokemons, async (p) => {
            const validation = common.validateQuery(p, common.queryValidEntries)
            if (!validation.isValid) {
                response = {
                    code: 400,
                    msg: validation.msg
                }
                return
            }

            let pokemon = new Pokemon()
            pokemon = p
            pokemon._id = new mongoose.Types.ObjectId()
            
            const pokemonExists = await findDatasource.findManyByQuery({name: common.titleCase(p.name)})
            if (pokemonExists.length > 0) {
                response = {
                    code: 400,
                    msg:`Pokémon já existe na base de dados ${p.name}`,
                    pokemons: pokemons
                }
                return
            }
            pokemons.push(pokemon)
        })
        
        if (response !== undefined) {
            return response
        }
        
        if (pokemons.length > 0) {
            
            await insertDatasource.insertManyPokemons(pokemons)
            response = {
                code: 201,
                msg:`Pokémons inseridos no banco de dados com sucesso!`,
                pokemons: pokemons
            }
        }
        
        return response 
    }

    findAndInsertPokemons().then(resp => {
        res.status(resp.code).json(resp)
    })

})

module.exports = router
