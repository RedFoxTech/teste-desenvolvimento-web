var express = require('express')
const models = require('../models')
var router = express.Router()

router.get('/', async (req, res) => {
	try {
		const list = await models.PokemonType.findAll({
			attributes: ['id', 'name', 'color'],
			order: ['name']
		})
		res.json({ list })
	} catch (e) {
		res.status(500).send('Unable to get data! Error: ' + e)
	}
})

module.exports = router
