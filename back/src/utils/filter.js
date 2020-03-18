const { Op } = require('sequelize')

const createMinMaxClause = (field, min, max) => {
	const where = {}

	const query = {}
	if (!!min) query[Op.gte] = min
	if (!!max) query[Op.lte] = max
	if (!!min || !!max) where[field] = query

	return where
}

module.exports = { createMinMaxClause }
