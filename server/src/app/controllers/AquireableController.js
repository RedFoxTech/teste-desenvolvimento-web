import Aquireable from '../models/Aquireable'

class AquireableController {
  async index (req, res) {
    const aquireable = await Aquireable.findAll()

    return res.json(aquireable)
  }
}

export default new AquireableController()
