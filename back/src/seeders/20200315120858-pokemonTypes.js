const xlsx = require('node-xlsx').default
const { formatSpreadsheetDataIntoCollection } = require('../utils/spreadsheet')
const { getUniqValuesFromCollection } = require('../utils/collection')

const basicColors = {
	bug: '#729f3f',
	dark: '#707070',
	dragon: '#53a4cf',
	eletric: '#eed535',
	fairy: '#fdb9e9',
	fighting: '#d56723',
	fire: '#fd7d24',
	flying: '#3dc7ef',
	ghost: '#7b62a3',
	grass: '#9bcc50',
	ground: '#f7de3f',
	ice: '#51c4e7',
	normal: '#a4acaf',
	poison: '#b97fc9',
	psychic: '#f366b9',
	rock: '#a38c21',
	steel: '#9eb7b8',
	water: '#4592c4'
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		const xlsData = xlsx.parse(`${__dirname}/Pokemon Go.xlsx`)
		const formattedXlsData = formatSpreadsheetDataIntoCollection(xlsData)
		const types = getUniqValuesFromCollection(formattedXlsData, 'Type 1', 'Type 2')

		const createdAt = new Date()
		const updatedAt = createdAt
		const list = types.map(name => ({ name, createdAt, updatedAt, color: basicColors[name] }))
		return queryInterface.bulkInsert('PokemonTypes', list, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('PokemonTypes', null, {})
	}
}
