const Pokemon = require('../models/').Pokemon;

module.exports = {
    list: (req,res,next) => {
        return Pokemon
        .findAll()
        .then(pkmn => res.status(201).json(pkmn))
        .catch(err => res.status(400).send(err))
    },
    create: (req,res,next) => {
        return Pokemon
        .create({...req.body})
        .then(pkmn => res.status(201).json(pkmn))
        .catch(err => res.status(400).send(err))
    },
    detail: (req,res,next) => {
        return Pokemon
        .findAll({where: {id: req.params.id}})
        .then(pkmn => res.status(201).json(pkmn))
        .catch(err => res.status(400).send(err))
    }
}