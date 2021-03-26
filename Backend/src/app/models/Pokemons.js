import Sequelize, { Model } from 'sequelize'

class Pokemons extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        pokedex_number: Sequelize.INTEGER,
        generation: Sequelize.INTEGER,
        evolution: Sequelize.STRING,
        family_id: Sequelize.INTEGER,
        type_1: Sequelize.INTEGER,
        type_2: Sequelize.INTEGER,
        weather_1: Sequelize.INTEGER,
        weather_2: Sequelize.INTEGER,
        stat_total: Sequelize.INTEGER,
        atk: Sequelize.INTEGER,
        def: Sequelize.INTEGER,
        sta: Sequelize.INTEGER,
        legendary: Sequelize.INTEGER,
        cp39: Sequelize.INTEGER,
        cp40: Sequelize.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'pokemons',
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Types, { foreignKey: 'type_1', as: 'type1' })
    this.belongsTo(models.Types, { foreignKey: 'type_2', as: 'type2' })
    this.belongsTo(models.Weather, {
      foreignKey: 'weather_1',
      as: 'weather1',
    })
    this.belongsTo(models.Weather, {
      foreignKey: 'weather_2',
      as: 'weather2',
    })
  }
}

export default Pokemons
