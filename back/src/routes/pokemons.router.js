var express = require('express')
const { Op } = require('sequelize')
const models = require('../models')
const { createMinMaxClause } = require('../utils/filter')

var router = express.Router()

const prepareWhereClause = query => {
	let where = {}

	const { q, atkMin, atkMax, defMin, defMax, staMin, staMax, legendary, typeID } = query

	if (!!q) {
		if (isNaN(q)) {
			where.name = { [Op.iLike]: `%${q}%` }
		} else {
			where.number = parseInt(q)
		}
	}

	if (typeID) {
		where[Op.or] = [{ type1ID: typeID }, { type2ID: typeID }]
	}

	where = { ...where, ...createMinMaxClause('atk', atkMin, atkMax) }
	where = { ...where, ...createMinMaxClause('def', defMin, defMax) }
	where = { ...where, ...createMinMaxClause('sta', staMin, staMax) }

	if (legendary !== undefined) {
		where.legendary = legendary
	}

	return where
}

router.get('/', async (req, res) => {
	const limit = 18
	const page = (req.query.page || 1) - 1
	const sort = req.query.sort || 'number'

	const where = prepareWhereClause(req.query)

	try {
		const total = await models.Pokemon.count({ where })
		const totalPages = Math.floor(total / limit)
		const offset = page * limit
		const list = await models.Pokemon.findAll({
			where,
			attributes: ['id', 'name', 'number'],
			include: [
				{ model: models.PokemonType, as: 'type1' },
				{ model: models.PokemonType, as: 'type2' }
			],
			offset,
			limit,
			order: [sort]
		})
		res.json({ list, total, page, totalPages })
	} catch (e) {
		res.status(500).send('Unable to get data! Error: ' + e)
	}
})

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const single = await models.Pokemon.findByPk(parseInt(id), {
			include: [
				{ model: models.PokemonType, as: 'type1' },
				{ model: models.PokemonType, as: 'type2' },
				{ model: models.Weather, as: 'weather1' },
				{ model: models.Weather, as: 'weather2' }
			]
		})
		res.json(single)
	} catch (e) {
		res.status(500).send('Unable to get data! Error: ' + e)
	}
})

module.exports = router
