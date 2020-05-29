import Weather from '../models/Weather'

class WeatherController {
  async index (req, res) {
    const weathers = await Weather.findAll()

    return res.json(weathers)
  }
}

export default new WeatherController()