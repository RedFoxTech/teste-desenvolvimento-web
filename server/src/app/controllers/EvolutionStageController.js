import Evolution_stage from '../models/Evolution_stage'

class EvolutionStageController {
  async index (req, res) {
    const evolution_stages = await Evolution_stage.findAll()

    return res.json(evolution_stages)
  }
}

export default new EvolutionStageController()