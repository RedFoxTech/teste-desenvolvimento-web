const xlsx = require('node-xlsx').default
const { formatSpreadsheetDataIntoCollection } = require('../utils/spreadsheet')
const { getUniqValuesFromCollection } = require('../utils/collection')

module.exports = {
	up: (queryInterface, Sequelize) => {
		const xlsData = xlsx.parse(`${__dirname}/Pokemon Go.xlsx`)
		const formattedXlsData = formatSpreadsheetDataIntoCollection(xlsData)
		const weathers = getUniqValuesFromCollection(formattedXlsData, 'Weather 1', 'Weather 2')

		const createdAt = new Date()
		const updatedAt = createdAt
		const list = weathers.map(name => ({ name, createdAt, updatedAt }))
		return queryInterface.bulkInsert('Weather', list, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Weather', null, {})
	}
}
