import express from 'express'
import routes from './routes'
import cors from 'cors'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class App {
  public express: express.Application
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use(routes)
  }
}

export default new App().express
