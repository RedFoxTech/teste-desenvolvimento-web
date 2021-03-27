import Sequelize, { Model } from 'sequelize'

class Weather extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'weather',
      }
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.Pokemons, {
      foreignKey: 'weather_1',
      as: 'weather1',
    })
  }
}

export default Weather
