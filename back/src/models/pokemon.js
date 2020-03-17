'use strict'

module.exports = (sequelize, DataTypes) => {
	const Pokemon = sequelize.define(
		'Pokemon',
		{
			name: DataTypes.STRING,
			number: DataTypes.INTEGER,
			generation: DataTypes.INTEGER,
			evolved: DataTypes.BOOLEAN,
			familyID: DataTypes.INTEGER,
			weather1ID: DataTypes.INTEGER,
			weather2ID: DataTypes.INTEGER,
			type1ID: DataTypes.INTEGER,
			type2ID: DataTypes.INTEGER,
			atk: DataTypes.INTEGER,
			def: DataTypes.INTEGER,
			sta: DataTypes.INTEGER,
			legendary: DataTypes.BOOLEAN
		},
		{}
	)
	Pokemon.associate = function(models) {
		Pokemon.belongsTo(models.Weather, {
			foreignKey: 'weather1ID',
			as: 'weather1'
		})

		Pokemon.belongsTo(models.Weather, {
			foreignKey: 'weather2ID',
			as: 'weather2'
		})

		Pokemon.belongsTo(models.PokemonType, {
			foreignKey: 'type1ID',
			as: 'type1'
		})

		Pokemon.belongsTo(models.PokemonType, {
			foreignKey: 'type2ID',
			as: 'type2'
		})
	}
	return Pokemon
}
