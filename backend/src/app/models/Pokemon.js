const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        family_id: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        atk: Sequelize.INTEGER,
        def: Sequelize.INTEGER,
        sta: Sequelize.INTEGER,
        sta_total: Sequelize.INTEGER,
        evolution_stage: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

}
module.exports = Pokemon;

