'use strict'
module.exports = (sequelize, DataTypes) => {
	const PokemonType = sequelize.define(
		'PokemonType',
		{
			name: DataTypes.STRING,
			color: DataTypes.STRING
		},
		{}
	)
	PokemonType.associate = function(models) {
		// associations can be defined here
	}
	return PokemonType
}
