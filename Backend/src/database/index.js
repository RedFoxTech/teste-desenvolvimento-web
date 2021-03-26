import Sequelize from 'sequelize'

import User from '../app/models/User'
import Types from '../app/models/Types'
import Weather from '../app/models/Weather'
import Pokemons from '../app/models/Pokemons'

import databaseConfig from '../config/database'

const models = [User, Types, Weather, Pokemons]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    this.connection
      .authenticate()
      .then(() => console.log('Sucesso Conexo'))
      .catch(console.log('Sucesso Conexo'))

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
