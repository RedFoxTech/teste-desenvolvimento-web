import Sequelize, { Model } from 'sequelize'

class Evolution_stage extends Model {
  static init (sequelize) {
    super.init(
      {
        evolution_stage: Sequelize.STRING
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'evolution_stage_id', targetKey: 'id' })
  }
}

export default Evolution_stage
