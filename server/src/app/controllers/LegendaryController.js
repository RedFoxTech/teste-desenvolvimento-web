import Legendary from '../models/Legendary'

class LegendaryController {
  async index (req, res) {
    const legendaries = await Legendary.findAll()

    return res.json(legendaries)
  }
}

export default new LegendaryController()