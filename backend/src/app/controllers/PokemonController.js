import * as Yup from 'yup';
import Pokemon from '../models/Pokemon';

class PokemonController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      pokedex_number: Yup.string().required(),
      generation: Yup.string().required(),
      evolution_stage: Yup.string().required(),
      evolved: Yup.string().required(),
      family_id: Yup.string().required(),
      type1: Yup.string().required(),
      type2: Yup.string().required(),
      weather1: Yup.string().required(),
      weather2: Yup.string().required(),
      stat_total: Yup.string().required(),
      atk: Yup.string().required(),
      def: Yup.string().required(),
      sta: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const pokemonExists = await Pokemon.findOne({ where: { name: req.body.name } });

    if (pokemonExists) {
      return res.status(400).json({ error: 'Pokemon already exists' });
    }

    const {
      id,
      name,
      pokedex_number,
      generation,
      evolution_stage,
      evolved,
      family_id,
      type1,
      type2,
      weather1,
      weather2,
      stat_total,
      atk,
      def,
      sta
    } = await Pokemon.create(req.body);

    return res.json({
      id,
      name,
      pokedex_number,
      generation,
      evolution_stage,
      evolved,
      family_id,
      type1,
      type2,
      weather1,
      weather2,
      stat_total,
      atk,
      def,
      sta
    });
  }

  async update(req, res) {
    const {
      name,
      pokedex_number,
      generation,
      evolution_stage,
      evolved,
      family_id,
      type1,
      type2,
      weather1,
      weather2,
      stat_total,
      atk,
      def,
      sta
    } = req.body;

    const pokemon = await Pokemon.findByPk(req.params.id);

    if (name && name !== pokemon.name) {
      const pokemonExists = await Pokemon.findOne({ where: { name } });

      if (pokemonExists) {
        return res.status(400).json({ error: 'Pokemon already exists' });
      }
    }

    const { id } = await pokemon.update(req.body);

    return res.json({
      id,
      pokedex_number,
      generation,
      evolution_stage,
      evolved,
      family_id,
      type1,
      type2,
      weather1,
      weather2,
      stat_total,
      atk,
      def,
      sta
    });
  }

  async index(req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id);

    return res.json(pokemon);
  }

  async get(req, res) {
    const pokemon = await Pokemon.findAll();

    return res.json(pokemon);
  }

}

export default new PokemonController();
