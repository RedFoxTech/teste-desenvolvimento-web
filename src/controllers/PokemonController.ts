import {Request, Response} from 'express';
require('dotenv').config();

const knex = require('../database/connection')

interface Pokemon {
  id: string;
  name: string;
  pokedex_number: string;
  img_name: string;
  generation: string;
  evolution_stage: string;
  evolved: string;
  family_id: string;
  cross_gen: string;
  type_1: string;
  type_2: string;
  weather_1: string;
  weather_2: string;
  stat_total: string;
  atk: string;
  def: string;
  sta: string;
  legendary: string;
  aquireable: string;
  spawns: string;
  regional: string;
  raidable: string;
  hatchable: string;
  shiny: string;
  nest: string;
  new: string;
  not_gettable: string;
  future_evolve: string;
  cp_40: string;
  cp_39: string;
  image_url?: string;
}


class PokemonController {
  async index(request: Request, response: Response) {
    const {filter, page = 1, limit = 20} = request.query;

    const [count] = await knex('pokemons').count('id');

    let pokemons = [];

    response.set('x-total-count', count['count']);
    if(!filter) {
      pokemons = await knex.select()
        .from('pokemons')
        .limit(Number(limit))
        .offset((Number(page) -1) * Number(limit))
        .orderBy('id');

    } else {
      pokemons = await knex.select()
        .from('pokemons')
        .where('name', 'ilike', `%${filter}%`)
        .orWhere('type_1', 'ilike', `%${filter}%`)
        .orWhere('type_2', 'ilike', `%${filter}%`)
        .limit(Number(limit))
        .offset((Number(page) -1) * Number(limit))
        .orderBy('id');

      }

      const serializedPokemons = pokemons.map((pokemon:Pokemon) => {
        return {
          ...pokemon,
          image_url: Number.isInteger(Number(pokemon.img_name)) ? null : process.env.APP_URL+`/uploads/${pokemon.img_name}`
        }
      })


      return response.json(serializedPokemons)


  }

  async show(request: Request, response: Response) {
    const {id} = request.params;

    const pokemon = await knex.select().from('pokemons').where('id', id).first()

    const serializedPokemon =  {
      ...pokemon,
      image_url:  Number.isInteger(Number(pokemon.img_name)) ? null : process.env.APP_URL+`/uploads/${pokemon.img_name}`
    }

    return response.status(200).json(serializedPokemon)
  }

  async create(request: Request, response: Response) {

    const  data = {
      name: request.body.name,
      pokedex_number: request.body.pokedex_number,
      generation: request.body.generation,
      evolution_stage: request.body.evolution_stage,
      evolved: request.body.evolved,
      family_id: request.body.family_id,
      cross_gen: request.body.cross_gen,
      type_1: request.body.type_1,
      type_2: request.body.type_2,
      weather_1: request.body.weather_1,
      weather_2: request.body.weather_2,
      stat_total: request.body.stat_total,
      atk: request.body.atk,
      def: request.body.def,
      sta: request.body.sta,
      legendary: request.body.legendary,
      aquireable: request.body.aquireable,
      spawns: request.body.spawns,
      regional: request.body.regional,
      raidable: request.body.raidable,
      hatchable: request.body.hatchable,
      shiny: request.body.shiny,
      nest: request.body.nest,
      new: request.body.new,
      not_gettable: request.body.not_gettable,
      future_evolve: request.body.future_evolve,
      cp_40: request.body.cp_40,
      cp_39: request.body.cp_39,
      img_name: request?.file?.filename
    };

    const responseData = await knex('pokemons').insert(data);

    return response.status(200).json(responseData);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const  data = {
      name: request.body.name,
      pokedex_number: request.body.pokedex_number,
      generation: request.body.generation,
      evolution_stage: request.body.evolution_stage,
      evolved: request.body.evolved,
      family_id: request.body.family_id,
      cross_gen: request.body.cross_gen,
      type_1: request.body.type_1,
      type_2: request.body.type_2,
      weather_1: request.body.weather_1,
      weather_2: request.body.weather_2,
      stat_total: request.body.stat_total,
      atk: request.body.atk,
      def: request.body.def,
      sta: request.body.sta,
      legendary: request.body.legendary,
      aquireable: request.body.aquireable,
      spawns: request.body.spawns,
      regional: request.body.regional,
      raidable: request.body.raidable,
      hatchable: request.body.hatchable,
      shiny: request.body.shiny,
      nest: request.body.nest,
      new: request.body.new,
      not_gettable: request.body.not_gettable,
      future_evolve: request.body.future_evolve,
      cp_40: request.body.cp_40,
      cp_39: request.body.cp_39,
      img_name: request?.file?.filename
    };

    const responseData = await knex('pokemons').where('id', id).update(data);

    return response.status(200).json(responseData);

  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('pokemons').where('id', id).del();

    return response.status(204).send();

  }
}

export default PokemonController;
