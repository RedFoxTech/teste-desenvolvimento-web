const xlsx = require('node-xlsx').default
const { formatSpreadsheetDataIntoCollection } = require('../utils/spreadsheet')
const { getUniqValuesFromCollection, formatToCollectionIntoObject } = require('../utils/collection')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const xlsData = xlsx.parse(`${__dirname}/Pokemon Go.xlsx`)
		const formattedXlsData = formatSpreadsheetDataIntoCollection(xlsData)

		const types = await queryInterface.sequelize.query('SELECT id, name from "PokemonTypes"')
		const weathers = await queryInterface.sequelize.query('SELECT id, name from "Weather"')

		const typesNameIdObj = formatToCollectionIntoObject(types[0], 'name', 'id')
		const weathersNameIdObj = formatToCollectionIntoObject(weathers[0], 'name', 'id')

		const createdAt = new Date()
		const updatedAt = createdAt
		const list = formattedXlsData.map(row => {
			return {
				name: row['Name'],
				number: row['Pokedex Number'],
				evolved: row['Evolved'] === 1,
				familyID: row['FamilyID'],
				type1ID: typesNameIdObj[row['Type 1']],
				type2ID: typesNameIdObj[row['Type 2']],
				weather1ID: weathersNameIdObj[row['Weather 1']],
				weather2ID: weathersNameIdObj[row['Weather 2']],
				atk: row['ATK'],
				def: row['DEF'],
				sta: row['STA'],
				legendary: row['Legendary'] === 1,
				createdAt,
				updatedAt
			}
		})

		return queryInterface.bulkInsert('Pokemons', list, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pokemons', null, {})
	}
}
