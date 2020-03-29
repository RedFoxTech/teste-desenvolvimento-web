const Sequelize = require("sequelize");

module.exports.pokemonTypeModel = {
  name: Sequelize.STRING,
  weakAgainstList: Sequelize.ARRAY(Sequelize.NUMBER),
  strongAgainstList: Sequelize.ARRAY(Sequelize.NUMBER)
};
