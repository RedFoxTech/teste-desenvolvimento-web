
const Sequelize = require('sequelize');
const Pokemon = require('../app/models/Pokemon');


const databaseConfig = require('../config/database');

const models = [Pokemon];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
    
  }

}

module.exports = new Database();
