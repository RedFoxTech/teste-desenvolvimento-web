import Sequelize from 'sequelize'

import Aquireable from '../app/models/Aquireable'
import Evolution_stage from '../app/models/Evolution_stage'
import Generation from '../app/models/Generation'
import Hatchable from '../app/models/Hatchable'
import Legendary from '../app/models/Legendary'
import Raidable from '../app/models/Raidable'
import Type from '../app/models/Type'
import Weather from '../app/models/Weather'
import Pokemon from '../app/models/Pokemon'

import databaseConfifg from '../config/database'

const models = [
  Aquireable, 
  Evolution_stage, 
  Generation, 
  Hatchable, 
  Legendary, 
  Raidable, 
  Type,
  Weather,
  Pokemon
]

class Database {
  constructor () {
    this.init()
  }

  init () {
 
    this.connection = new Sequelize(databaseConfifg)

    models
      .map(model => model.init(this.connection))     
      .map(
        model =>
          model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()