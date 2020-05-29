import Generation from '../models/Generation'

class GenerationController {
  async index (req, res) {
    const generations = await Generation.findAll()

    return res.json(generations)
  }
}

export default new GenerationController()