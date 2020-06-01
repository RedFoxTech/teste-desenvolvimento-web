import Sequelize, { Model } from 'sequelize'

class Weather extends Model {
  static init (sequelize) {
    super.init(
      {
        weather: Sequelize.STRING
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'weather_id_1', as: 'weather_1', targetKey: 'id' })
    this.hasMany(models.Pokemon, { foreignKey: 'weather_id_2', as: 'weather_2', targetKey: 'id' })
  }
}

export default Weather
