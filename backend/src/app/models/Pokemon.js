import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        pokedex_number: Sequelize.STRING,
        generation: Sequelize.STRING,
        evolution_stage: Sequelize.STRING,
        evolved: Sequelize.STRING,
        family_id: Sequelize.STRING,
        type1: Sequelize.STRING,
        type2: Sequelize.STRING,
        weather1: Sequelize.STRING,
        weather2: Sequelize.STRING,
        stat_total: Sequelize.STRING,
        atk: Sequelize.STRING,
        def: Sequelize.STRING,
        sta: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Pokemon;
