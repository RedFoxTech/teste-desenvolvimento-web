'use strict'
module.exports = (sequelize, DataTypes) => {
	const Weather = sequelize.define(
		'Weather',
		{
			name: DataTypes.STRING
		},
		{}
	)
	Weather.associate = function(models) {
		// associations can be defined here
	}
	return Weather
}
