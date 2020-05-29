import Sequelize, { Model } from 'sequelize'

class Type extends Model {
  static init (sequelize) {
    super.init(
      {
        type: Sequelize.STRING
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasMany(models.Pokemon, { foreignKey: 'type_id_1', as: 'type_1', targetKey: 'id' })
    this.hasMany(models.Pokemon, { foreignKey: 'type_id_2', as: 'type_2', targetKey: 'id' })
  }
}

export default Type
