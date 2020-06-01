import Raidable from '../models/Raidable'

class RaidableController {
  async index (req, res) {
    const raidables = await Raidable.findAll()

    return res.json(raidables)
  }
}

export default new RaidableController()