import * as Yup from 'yup'

import Weather from '../models/Weather'
import Pokemons from '../models/Pokemons'

import AppError from '../errors/AppError'

class WeatherController {
  async store(req, res) {
    const { name } = req.body

    const schema = Yup.object().shape({
      name: Yup.string().required('Name required field!'),
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      throw new AppError(err)
    }

    const weather = await Weather.findOne({ where: { name } })

    if (!weather) {
      throw new AppError('Weather already registered!.', 401)
    }

    const resultWeather = await Weather.create(req.body)

    return res.status(201).json({
      resultWeather,
    })
  }

  async show(req, res) {
    const { id } = req.params

    const weather = await Weather.findByPk(id, {
      order: ['name'],
      attributes: ['id', 'name'],
      include: [
        {
          model: Pokemons,
          as: 'weather1',
          attributes: [
            'name',
            'generation',
            'legendary',
            'stat_total',
            'atk',
            'def',
            'sta',
            'cp39',
            'cp40',
          ],
        },
      ],
    })

    if (!weather) {
      throw new AppError('Weather not found')
    }

    return res.json(weather)
  }

  async index(req, res) {
    const weather = await Weather.findAll({
      order: ['name'],
      attributes: ['id', 'name'],
    })

    if (weather.length === 0) {
      throw new AppError('There are no weather forms.')
    }

    return res.json({
      weather,
    })
  }

  async update(req, res) {
    const { id } = req.params

    const weather = await Weather.findByPk(id)

    if (!weather) {
      throw new AppError('Weather not found.')
    }

    const { name } = weather

    const existWeather = await Weather.findOne({ where: { name } })

    if (!existWeather) {
      throw new AppError('Weather already registered!.', 401)
    }

    const newWeather = await weather.update(req.body)

    return res.json(newWeather)
  }
}

export default new WeatherController()
