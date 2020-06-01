import Sequelize, { Model } from 'sequelize'

class Hatchable extends Model {
  static init (sequelize) {
    super.init(
      {
        hatchable: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'hatchable_id', targetKey: 'id' })
  }
}

export default Hatchable
