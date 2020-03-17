'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Pokemons', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			generation: {
				type: Sequelize.INTEGER
			},
			evolved: {
				type: Sequelize.BOOLEAN
			},
			familyID: {
				type: Sequelize.INTEGER
			},
			weather1ID: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Weather',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			weather2ID: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Weather',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			type1ID: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'PokemonTypes',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			type2ID: {
				type: Sequelize.INTEGER,
				references: {
					model: 'PokemonTypes',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			atk: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			def: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			sta: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			legendary: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Pokemons')
	}
}
