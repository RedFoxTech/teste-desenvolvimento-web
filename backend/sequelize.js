const Sequelize = require("sequelize");

const { pokemonModel } = require("./models/pokemon");
const { pokemonTypeModel } = require("./models/pokemonType");
const { weatherModel } = require("./models/weather");

const modelMap = {};
const getModelMap = () => modelMap;
module.exports.getModelMap = getModelMap;

const openConnection = () => {
  return new Promise((resolve, reject) => {
    const connection = new Sequelize({
      dialect: "sqlite",
      storage: "./database.sqlite"
    });

    connection.authenticate()
      .then(() => resolve(connection))
      .catch(error => reject(error))
  });
};
module.exports.openConnection = openConnection;

const initializeDatabase = () => {
  openConnection()
    .then(connection => {
      modelMap["pokemon"] = connection.define("pokemon", pokemonModel);
      modelMap["pokemonType"] = connection.define("pokemonType", pokemonTypeModel);
      modelMap["weather"] = connection.define("weather", weatherModel);
    });
};
module.exports.initializeDatabase = initializeDatabase;
