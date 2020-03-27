const Sequelize = require("sequelize");

module.exports.weatherModel = {
  id: { type: Sequelize.NUMBER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING
};
