import { Controller, Delete, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Pokemon } from '@src/models/pokemon'

@Controller('pokemons')
export class PokemonController {
  @Get('')
  public async getAll (req: Request, res: Response): Promise<void> {
    try {
      const pokemon = await Pokemon.find()
      res.status(200).send(pokemon)
    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }

  @Post('')
  public async create (req: Request, res: Response): Promise<void> {
    try {
      const pokemon = await new Pokemon(req.body)
      res.status(201).send(pokemon)
    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }

  @Delete(':id')
  public async delete (req: Request, res: Response): Promise<void> {
    try {
      const pokemon = await Pokemon.findByIdAndRemove(req.params.id)
      res.status(200).send(pokemon)
    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }
}
