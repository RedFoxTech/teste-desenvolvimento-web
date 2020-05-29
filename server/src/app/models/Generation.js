import Sequelize, { Model } from 'sequelize'

class Generation extends Model {
  static init (sequelize) {
    super.init(
      {
        generation: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'generation_id', targetKey: 'id' })
  }
}

export default Generation
