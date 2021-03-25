import Sequelize from 'sequelize';

import Pokemon from '../app/models/Pokemon';
import databaseConfig from '../config/database';

const models = [Pokemon];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
