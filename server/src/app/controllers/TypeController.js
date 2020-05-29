import Type from '../models/Type'

class TypeController {
  async index (req, res) {
    const types = await Type.findAll()

    return res.json(types)
  }
}

export default new TypeController()