// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import Pokemon from '../../models/Pokemon'

class PokemonController {
  public async index (req:Request, res:Response):Promise<Response> {
    const pokemon = await Pokemon.findOne({ where: { name: req.body.name } })
    if (pokemon) {
      return res.json('Já existe um Pokémon com esse nome cadastrado na Pokédex').status(400)
    }
    const newPokemon = await Pokemon.create(req.body)
    return res.json(newPokemon)
  }
}

export default new PokemonController()
