const express = require('express')
const router = express.Router()
const Pokemon = require('../models/Pokemon')
const multer = require('multer')
const multerConfig = require('../config/multer')

router.get('/pokemon', async (req, res) => {
    try {
        const page = req.query.page
        const limit = parseInt(req.query.limit)
        const skip = limit * (page - 1)
        const amount = await Pokemon.count()
        if (req.query.type !== '') {
            const type1 = req.query.type
            await Pokemon.find({ type1 }).skip(skip).limit(limit).exec((err, pokemons) => {
                if (err) throw err
                return res.status(200).send({ pokemons, amount })
            })
        } else {
            await Pokemon.find().skip(skip).limit(limit).exec((err, pokemons) => {
                if (err) throw err
                return res.status(200).send({ pokemons, amount })
            })
        }
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar os pokémons.' })
    }
})

router.put('/pokemon', async (req, res) => {
    try {
        if (req.body.name) {
            await Pokemon.updateOne({ _id: req.body._id }, req.body)
            return res.status(200).send({ success: 'Dados alterado.' })
        } else return res.status(406).send({ error: 'nome não pode ser em branco' })
    } catch (err) { return res.status(400).send({ error: err }) }
})

router.post('/pokemon', async (req, res) => {
    const { name } = req.body
    try {
        if (name) {
            if (await Pokemon.findOne({ name })) {
                return res.status(400).send({ error: 'Nome do pokémon já existe.' })
            }
        }
        await Pokemon.create(req.body)
        return res.status(201).send({ success: 'Pokémon adicionado' })
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar o pokémon.' })
    }
})

router.post('/pokemon/img', multer(multerConfig).single('file'), async (req, res) => {
    const { key, location: url = '' } = req.file
    const { name } = req.body
    if (req.body.name) {
        await Pokemon.findOneAndUpdate({ name }, { key, url })
        return res.status(201).send({ success: 'Imagem adicionada' })
    }
  })

router.delete('/pokemon', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.body._id)
        await pokemon.remove()
        return res.status(200).send({ success: 'Pokémon deletado.' })
    } catch (err) { return res.status(400).send({ error: err }) }
})

module.exports = app => app.use('/api', router)
