// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import Pokemon from '../../models/Pokemon'
// eslint-disable-next-line no-unused-vars
import { ValidationError, ValidationErrorItem, Op } from 'sequelize'
import { ErrorHandler, deleteImage } from '../helpers'

class PokemonController {
  public async store (req:Request, res:Response):Promise<Response> {
    try {
      const { name, atk, def, sta, pokedexNumber } = req.body
      if (!name) {
        return res.status(400).json({ message: 'O atributo name não foi enviado' })
      }

      if (!pokedexNumber) {
        return res.status(400).json({ message: 'O atributo pokedexNumber não foi enviado' })
      }

      let fileLocation = ''
      let fileKey = ''

      if (req.file) {
        const { location, key } = <any>req.file
        fileLocation = location
        fileKey = key
      } else {
        return res.status(400).json({ message: 'Arquivo de imagem não enviado' })
      }

      const pokemon = await Pokemon.findOne({ where: { name: name } })
      if (pokemon) {
        deleteImage(fileKey)
        return res.status(400).json({ message: 'Já existe um Pokémon com esse nome cadastrado na Pokédex' })
      }

      const pokemonNumber = await Pokemon.findOne({ where: { pokedexNumber: pokedexNumber } })
      if (pokemonNumber) {
        deleteImage(fileKey)
        return res.status(400).json({ message: 'Já existe um Pokémon com esse número de Pokédex' })
      }

      const newPokemon = await Pokemon.create(
        Object.assign(
          {}, req.body,
          { imgUrl: (fileLocation), imgName: (fileKey), statTotal: this.calculateTotalStat(atk, def, sta) }
        ))
      return res.status(200).json(newPokemon)
    } catch (error) {
      if (req.file) {
        const { key } = <any>req.file
        deleteImage(key)
      }
      const ErrorList = ErrorHandler(error)
      if (ErrorList) {
        return res.status(400).json(ErrorHandler(error))
      }
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  public async index (req:Request, res:Response):Promise<Response> {
    try {
      if (req.query.id) {
        const pokemon = await Pokemon.findOne({ where: { id: req.query.id }, order: [['pokedexNumber', 'ASC']] })
        return res.status(200).json(pokemon)
      }
      if (req.query.pokedex_number) {
        const pokemon = await Pokemon.findOne({ where: { pokedexNumber: req.query.pokedex_number }, order: [['pokedexNumber', 'ASC']] })
        return res.status(200).json(pokemon)
      }
      if (req.query.name) {
        const pokemon = await Pokemon.findOne({ where: { name: req.query.name }, order: [['pokedexNumber', 'ASC']] })
        return res.status(200).json(pokemon)
      }

      let pokemons:Pokemon[] = []
      if (req.query.type) {
        pokemons = await Pokemon.findAll({ where: { [Op.or]: [{ type1: req.query.type.toString().toLowerCase() }, { type2: req.query.type.toString().toLowerCase() }] }, order: [['pokedexNumber', 'ASC']] })
      } else {
        pokemons = await Pokemon.findAll({ order: [['pokedexNumber', 'ASC']] })
      }
      return res.status(200).json(pokemons)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  public async update (req:Request, res:Response):Promise<Response> {
    try {
      if (!req.params.id) {
        return res.status(400).json({ message: 'Campo id não enviado' })
      }

      let fileLocation = ''
      let fileKey = ''
      if (req.file) {
        const { location, key } = <any>req.file
        fileLocation = location
        fileKey = key
      }

      const pokemon = await Pokemon.findOne({ where: { id: req.params.id } })
      if (!pokemon) {
        return res.status(400).json({ message: 'Pokemon não encontrado' })
      }

      const validateNewPokedexNumber = await Pokemon.findOne({ where: { pokedex_number: req.body.pokedexNumber } })
      if (validateNewPokedexNumber?.id !== pokemon.id) {
        return res.status(400).json({ message: 'O número de Pokedex enviado já está em uso' })
      }

      const validateNewPokedexName = await Pokemon.findOne({ where: { name: req.body.name } })
      if (validateNewPokedexName?.id !== pokemon.id) {
        return res.status(400).json({ message: 'O nome enviado já está em uso' })
      }

      const oldImage = <string>pokemon?.imgName

      if (fileLocation && fileKey) {
        Object.assign(pokemon, req.body, { imgName: fileKey, imgUrl: fileLocation, statTotal: this.calculateTotalStat(req.body.atk, req.body.def, req.body.sta) })
        const newPokemon = await pokemon?.save()
        deleteImage(oldImage)
        return res.status(200).json(newPokemon)
      } else {
        Object.assign(pokemon, req.body, { statTotal: this.calculateTotalStat(req.body.atk, req.body.def, req.body.sta) })
        const newPokemon = await pokemon?.save()
        return res.status(200).json(newPokemon)
      }
    } catch (error) {
      if (req.file) {
        const { key } = <any>req.file
        deleteImage(key)
      }
      const ErrorList = ErrorHandler(error)
      if (ErrorList) {
        return res.status(400).json(ErrorHandler(error))
      }
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  public async delete (req:Request, res:Response):Promise<Response> {
    try {
      if (!req.params.id) {
        return res.status(400).json({ message: 'Campo id não enviado' })
      }
      const pokemon = await Pokemon.findOne({ where: { id: req.params.id } })
      await pokemon?.destroy().then(() => deleteImage(pokemon.imgName))
      return res.status(200).json({ message: 'Pokemon excluido com sucesso' })
    } catch (error) {
      const ErrorList = ErrorHandler(error)
      if (ErrorList) {
        return res.status(400).json(ErrorHandler(error))
      }
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  private calculateTotalStat (atk:number, def:number, sta:number):number {
    return +atk + +def + +sta
  }
}

export default new PokemonController()
