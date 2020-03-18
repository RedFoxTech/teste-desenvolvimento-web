const models = require('../models')

var express = require('express')

var router = express.Router()

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const members = await models.Pokemon.findAll({
			where: { familyID: id },
			attributes: ['id', 'name', 'number']
		})
		res.json({ familyID: id, members })
	} catch (e) {
		res.status(500).send('Unable to get data! Error: ' + e)
	}
})

module.exports = router
