import Sequelize, { Model } from 'sequelize'

class Types extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'types',
      }
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.Pokemons, {
      foreignKey: 'type_1',
      as: 'type1',
    })
  }
}

export default Types
