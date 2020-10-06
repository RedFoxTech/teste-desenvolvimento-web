import './utils/module-alias'
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import * as database from '@src/database'
import { PokemonController } from './controllers/pokemon'

export class SetupServer extends Server {
  constructor (private port = 3000) {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()
    await this.databaseSetup()
  }

  private setupExpress (): void {
    this.app.use(express.json())
  }

  private setupControllers (): void {
    const pokemonController = new PokemonController()
    this.addControllers([
      pokemonController
    ])
  }

  private async databaseSetup (): Promise<void> {
    await database.connect()
  }

  public start (): void {
    this.app.listen(this.port, () => {
      console.info('Server is running on port: ' + this.port)
    })
  }

  public async close (): Promise<void> {
    await database.close()
  }

  public getApp (): Application {
    return this.app
  }
}
