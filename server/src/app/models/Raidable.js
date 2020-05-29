import Sequelize, { Model } from 'sequelize'

class Raidable extends Model {
  static init (sequelize) {
    super.init(
      {
        raidable: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'raidable_id', targetKey: 'id' })
  }
}

export default Raidable
