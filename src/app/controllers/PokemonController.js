import Pokemon from '../models/Pokemon';

class PokemonController {
  async index(request, response) {
    const { page, resPerPage } = request.query;
    const pokemons = await Pokemon.paginate(
      {},
      {
        page,
        limit: parseInt(resPerPage, 8),
      }
    );

    return response.json({
      pokemons,
    });
  }

  async store(request, response) {
    const pokemonExists = await Pokemon.findOne({ name: request.body.name });

    if (pokemonExists) {
      return response
        .status(400)
        .json({ error: 'This Pokemon already registred' });
    }

    const statTotal = request.body.atk + request.body.def + request.body.sta;

    const pokemon = await Pokemon.create({
      ...request.body,
      statTotal,
    });
    return response.status(201).json(pokemon);
  }

  async update(request, response) {
    const { id } = request.params;

    const pokemonExists = await Pokemon.findById({ _id: id });

    if (!pokemonExists) {
      return response.status(400).json('Pokemon not found');
    }

    const pokemon = await Pokemon.findByIdAndUpdate(
      id,
      {
        $set: {
          ...request.body,
        },
      },
      { new: true }
    );

    pokemon.statTotal = pokemon.atk + pokemon.def + pokemon.sta;
    await pokemon.save();
    return response.json(pokemon);
  }
}

export default new PokemonController();
