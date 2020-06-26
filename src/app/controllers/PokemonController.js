import Pokemon from '../models/Pokemon';

class PokemonController {
  async index(request, response) {
    const { page, limit } = request.query;
    const pokemons = await Pokemon.paginate(
      {},
      {
        page,
        limit: parseInt(limit, 10) || 10,
        populate: 'familyId',
        lean: false,
      }
    );

    return response.json({
      pokemons,
    });
  }

  async show(request, response) {
    const { id } = request.params;

    const pokemon = await Pokemon.findById(id).populate('familyId');

    if (!pokemon) {
      return response.status(400).json({ error: 'Pokemon not found' });
    }

    return response.json(pokemon);
  }

  async store(request, response) {
    const pokemonExists = await Pokemon.findOne({ name: request.body.name });

    if (pokemonExists) {
      return response
        .status(400)
        .json({ error: 'This Pokemon already registred' });
    }

    const statTotal = request.body.atk + request.body.def + request.body.sta;

    const pokemonCreate = await Pokemon.create({
      ...request.body,
      statTotal,
    });
    const pokemon = await Pokemon.findById(pokemonCreate.id).populate(
      'familyId'
    );
    return response.status(201).json(pokemon);
  }

  async update(request, response) {
    const { id } = request.params;

    const pokemonExists = await Pokemon.findOne({
      _id: id,
    });

    if (!pokemonExists) {
      return response.status(400).json('Pokemon not found');
    }

    const pokemonNameExists = await Pokemon.findOne({
      name: request.body.name,
    });

    if (pokemonNameExists && pokemonExists.name !== request.body.name) {
      return response
        .status(400)
        .json('There is already a pokemon with that name');
    }

    const pokemon = await Pokemon.findByIdAndUpdate(
      id,
      {
        $set: {
          ...request.body,
        },
      },
      { new: true }
    ).populate('familyId');

    pokemon.statTotal = pokemon.atk + pokemon.def + pokemon.sta;
    await pokemon.save();
    return response.json(pokemon);
  }

  async destroy(request, response) {
    const { id } = request.params;

    const pokemon = await Pokemon.findById(id);

    if (!pokemon) {
      return response.status(400).json({ error: 'Pokemon not found' });
    }

    await pokemon.deleteOne();

    return response.send();
  }
}

export default new PokemonController();
