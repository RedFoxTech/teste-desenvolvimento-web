import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'

import routes from './routes'
import AppError from './app/errors/AppError'

import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.error()
  }

  middlewares() {
    this.server.use(cors())

    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }

  error() {
    this.server.use((err, req, res, next) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message,
        })
      }

      return res.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`,
      })
    })
  }
}

export default new App().server
