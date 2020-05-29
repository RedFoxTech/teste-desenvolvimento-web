import Pokemon from '../models/Pokemon'

class PokemonController {
  async index (req, res) {
    const pokemons = await Pokemon.findAll({
      order: ['pokedex_number'],
    })

    return res.json(pokemons)
  }

  async store (req, res) {
    const pokemonNameExists = await Pokemon.findOne({
      where: { name: req.body.name },
    })
    const pokemonPokedexNumberExists = await Pokemon.findOne({
      where: { pokedex_number: req.body.pokedex_number },
    })

    if (pokemonNameExists) {
      return res.status(400).json({ error: 'Pokemon name already exists.' })
    }
    if (pokemonPokedexNumberExists) {
      return res
        .status(400)
        .json({ error: 'Pokemon pokedex number already exists.' })
    }

    const pokemon = await Pokemon.create(req.body)

    return res.json(pokemon)
  }

  async update (req, res) {
    const pokemonExists = await Pokemon.findOne({
      where: { id: req.params.id },
    })

    if (!pokemonExists) {
      return res
        .status(400)
        .json({ error: 'Pokemon doesnt exists.' })
    }

    const pokemon = await Pokemon.findByPk(req.params.id)
    const pokemonUpdated = await pokemon.update(req.body)

    return res.json(pokemonUpdated)
  }

  async delete (req, res) {
    const pokemonExists = await Pokemon.findOne({
      where: { id: req.params.id },
    })
  
    if (!pokemonExists) {
      return res
        .status(400)
        .json({ error: 'Pokemon doesnt exists.' })
    }

    await Pokemon.destroy({ where: { id: req.params.id } })

    return res.json({})
  }
}

export default new PokemonController()
