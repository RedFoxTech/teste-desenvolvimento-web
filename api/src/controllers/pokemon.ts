import { Controller, Delete, Get, Middleware, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Pokemon } from '@src/models/pokemon'
import { ProcessFile } from '@src/services/processFile'
import multer from 'multer'

const processFile = new ProcessFile()

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
      const pokemon = await new Pokemon(req.body).save()
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

  @Post('upload')
  @Middleware(multer().single('file'))
  public async upload (req: Request, res: Response): Promise<void> {
    try {
      const file = req.file
      var data = await processFile.process(file)
      data = JSON.parse(data)

      const pokemon = await Pokemon.collection.insertMany([...data])
      res.status(201).send(pokemon)
    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }
}
