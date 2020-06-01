import Sequelize, { Model } from 'sequelize'

class Legendary extends Model {
  static init (sequelize) {
    super.init(
      {
        legendary: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon,  { foreignKey: 'legendary_id', targetKey: 'id' })
  }
}

export default Legendary
