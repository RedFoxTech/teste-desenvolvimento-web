import { Op } from 'sequelize'
import * as Yup from 'yup'

import Pokemons from '../models/Pokemons'
import Types from '../models/Types'
import Weather from '../models/Weather'

import AppError from '../errors/AppError'

class PokemonsController {
  async store(req, res) {
    const {
      name,
      pokedex_number,
      generation,
      evolution,
      family_id,
      type_1,
      type_2,
      weather_1,
      weather_2,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      cp39,
      cp40,
    } = req.body

    const schema = Yup.object().shape({
      name: Yup.string().required('Name required field!'),
      type_1: Yup.number()
        .required('Type required field!')
        .positive()
        .integer(),
      weather_1: Yup.number()
        .required('Weather required field!')
        .positive()
        .integer(),
      atk: Yup.number().required('ATK required field!').positive().integer(),
      def: Yup.number().required('DEF required field!').positive().integer(),
      sta: Yup.number().required('STA required field!').positive().integer(),
      cp39: Yup.number().required('CP39 required field!').positive().integer(),
      cp40: Yup.number().required('CP40 Required field!').positive().integer(),
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      throw new AppError(err)
    }

    const pokemonExists = await Pokemons.findOne({
      where: { name },
    })

    if (pokemonExists) {
      throw new AppError('Pokémon already registered!')
    }

    const pokemons = await Pokemons.create({
      name,
      pokedex_number,
      generation,
      evolution,
      family_id,
      type_1,
      type_2,
      weather_1,
      weather_2,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      cp39,
      cp40,
    })

    return res.status(201).json({ pokemons })
  }

  async index(req, res) {
    const { page = 1 } = req.query
    const { ativo } = req.body
    const filter = ativo === undefined ? true : ativo

    const pokemon = await Pokemons.findAll({
      where: { active: filter },
      order: ['name'],
      attributes: [
        'id',
        'name',
        'family_id',
        'legendary',
        'stat_total',
        'atk',
        'def',
        'sta',
        'cp39',
        'cp40',
      ],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Types,
          as: 'type1',
          attributes: ['name'],
        },
        {
          model: Types,
          as: 'type2',
          attributes: ['name'],
        },
        {
          model: Weather,
          as: 'weather1',
          attributes: ['name'],
        },
        {
          model: Weather,
          as: 'weather2',
          attributes: ['name'],
        },
      ],
    })

    if (pokemon.length === 0) {
      throw new AppError('Not the registered pokémon!')
    }

    return res.json(pokemon)
  }

  async show(req, res) {
    const { id } = req.params

    const pokemon = await Pokemons.findByPk(id, {
      attributes: [
        'id',
        'name',
        'family_id',
        'legendary',
        'stat_total',
        'atk',
        'def',
        'sta',
        'cp39',
        'cp40',
      ],
      include: [
        {
          model: Types,
          as: 'type1',
          attributes: ['name'],
        },
        {
          model: Types,
          as: 'type2',
          attributes: ['name'],
        },
        {
          model: Weather,
          as: 'weather1',
          attributes: ['name'],
        },
        {
          model: Weather,
          as: 'weather2',
          attributes: ['name'],
        },
      ],
    })

    if (!pokemon) {
      throw new AppError('Pokémon not found!')
    }

    return res.json(pokemon)
  }

  async update(req, res) {
    const { id } = req.params

    const pokemon = await Pokemons.findByPk(id)

    if (!pokemon) {
      throw new AppError('Pokémon does not exist!')
    }

    const namePokemonExists = await Pokemons.findOne({
      where: { name: pokemon.name, id: { [Op.ne]: pokemon.id } },
    })

    if (namePokemonExists) {
      throw new AppError('Pokémon name already registered!')
    }

    const { name } = await pokemon.update(req.body)

    return res.json({ name })
  }

  async delete(req, res) {
    const { id } = req.params

    const pokemon = await Pokemons.findByPk(id)

    if (!pokemon) {
      throw new AppError('Pokémon does not exist!')
    }

    const { name } = await pokemon.update({ active: false })

    return res.json({ msg: `The Pokémon ${name} successfully deleted!` })
  }
}

export default new PokemonsController()
/*

{
	"name": "Charmeleon",
	"family_id": 1,
	"type_1": 7,
	"type_2": 14,
	"weather_1": 5,
	"weather_2": 1,
	"stat_total": 422,
	"atk": 151,
	"def": 151,
	"sta": 120,
	"legendary": 0,
	"cp39": 1552,
	"cp40": 1529
}
*/
