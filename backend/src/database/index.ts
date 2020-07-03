
import { Sequelize } from 'sequelize'

// require('dotenv').config({
//   path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
// })
// eslint-disable-next-line import/first
// import databaseConfig from '../config/database'
const databaseConfig = require('../config/database')

class Database {
  public connection!: Sequelize;

  constructor () {
    this.init()
  }

  init (): void {
    this.connection = new Sequelize(databaseConfig)
  }
}

const database: Database = new Database()

export default database
