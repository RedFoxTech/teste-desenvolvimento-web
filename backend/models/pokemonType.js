const Sequelize = require("sequelize");

module.exports.pokemonTypeModel = {
  id: { type: Sequelize.NUMBER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  weakAgainstList: Sequelize.ARRAY(Sequelize.NUMBER),
  strongAgainstList: Sequelize.ARRAY(Sequelize.NUMBER)
};
