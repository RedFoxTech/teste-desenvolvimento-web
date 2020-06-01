import Sequelize, { Model } from 'sequelize'

class Pokemon extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        img_name: Sequelize.STRING,
        pokedex_number: Sequelize.INTEGER,
        evolved: Sequelize.BOOLEAN,
        family_id: Sequelize.INTEGER,
        cross_gen: Sequelize.BOOLEAN,
        stat_total: Sequelize.INTEGER,
        atk: Sequelize.INTEGER,
        def: Sequelize.INTEGER,
        sta: Sequelize.INTEGER,
        spawns: Sequelize.BOOLEAN,
        regional: Sequelize.BOOLEAN,
        shiny: Sequelize.BOOLEAN,
        nest: Sequelize.BOOLEAN,
        new: Sequelize.BOOLEAN,
        not_gettable: Sequelize.BOOLEAN,
        future_evolve: Sequelize.BOOLEAN,
        hundred_percent_cp_40: Sequelize.INTEGER,
        hundred_percent_cp_39: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate (models) {
    this.hasOne(models.Raidable, { foreignKey: 'id', targetKey: 'raidable_id'  })
    this.hasOne(models.Hatchable, { foreignKey: 'id', targetKey: 'hatchable_id' })
    this.hasOne(models.Aquireable, { foreignKey: 'id', targetKey: 'aquireable_id' })
    this.hasOne(models.Legendary, { foreignKey: 'id', targetKey: 'legendary_id' })
    this.hasOne(models.Type, { foreignKey: 'id', targetKey: 'type_id_1' })
    this.hasOne(models.Type, { foreignKey: 'id', targetKey: 'type_id_2' })
    this.hasOne(models.Weather, { foreignKey: 'id', targetKey: 'weather_id_1' })
    this.hasOne(models.Weather, { foreignKey: 'id', targetKey: 'weather_id_2' })
    this.hasOne(models.Evolution_stage, { foreignKey: 'id', targetKey: 'evolution_stage_id' })
    this.hasOne(models.Generation, { foreignKey: 'id', targetKey: 'generation_id' })
  }
}

export default Pokemon
