import Sequelize, { Model } from 'sequelize'

class Aquireable extends Model {
  static init (sequelize) {
    super.init(
      {
        aquireable: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon
      , { foreignKey: 'aquireable_id',  targetKey: 'id' }
    )
  }
}

export default Aquireable
