import Hatchable from '../models/Hatchable'

class HatchableController {
  async index (req, res) {
    const hatchables = await Hatchable.findAll()

    return res.json(hatchables)
  }
}

export default new HatchableController()