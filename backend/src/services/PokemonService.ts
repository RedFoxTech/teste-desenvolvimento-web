import  { Pokemon } from '../entities/Pokemon';
import { getCustomRepository, Like, Repository } from "typeorm";
import { PokemonRepository } from '../repositories/PokemonRepository';
import { getImgPokemon } from '../utils/getImgPokemon';

interface IPokemonList{
  search: string | any, 
  page: string | any, 
  name: string | any, 
  pokedex_number: string | any, 
  generation: string | any, 
  evolution_stage: string | any, 
  evolved: string | any, 
  family_id: string | any, 
  cross_gen: string | any, 
  type_one: string | any, 
  type_two: string | any, 
  weather_one: string | any, 
  weather_two: string | any, 
  stat_total: string | any, 
  atk: string | any, 
  def: string | any, 
  sta: string | any, 
  legendary: string | any, 
  aquireable: string | any, 
  spawns: string | any, 
  regional: string | any, 
  raidable: string | any, 
  hatchable: string | any, 
  shiny: string | any, 
  nest: string | any, 
  is_new: string | any, 
  not_gettable: string | any, 
  future_evolve: string | any, 
  cp_100_40: string | any, 
  cp_100_39: string | any
}

interface IPokemonStore{
  name: string, 
  pokedex_number: number,
  img_name: string,
  generation: number,
  evolution_stage: string,
  evolved: number,
  family_id: number,
  cross_gen: number,
  type_one: string,
  type_two: string,
  weather_one: string,
  weather_two: string,
  stat_total: number,
  atk: number,
  def: number,
  sta: number,
  legendary: number,
  aquireable: number,
  spawns: number,
  regional: number,
  raidable: number,
  hatchable: number,
  shiny: number,
  nest: number,
  is_new: number,
  not_gettable: number,
  future_evolve: number,
  cp_100_40: number,
  cp_100_39: number
}

interface IPokemonEdit{
  id:string,
  name: string, 
  pokedex_number: number,
  img_name: string,
  generation: number,
  evolution_stage: string,
  evolved: number,
  family_id: number,
  cross_gen: number,
  type_one: string,
  type_two: string,
  weather_one: string,
  weather_two: string,
  stat_total: number,
  atk: number,
  def: number,
  sta: number,
  legendary: number,
  aquireable: number,
  spawns: number,
  regional: number,
  raidable: number,
  hatchable: number,
  shiny: number,
  nest: number,
  is_new: number,
  not_gettable: number,
  future_evolve: number,
  cp_100_40: number,
  cp_100_39: number
}

class PokemonService {
  private pokemonRepository: Repository<Pokemon>

  constructor(){
    this.pokemonRepository = getCustomRepository(PokemonRepository);
  }

  async index({search, page, name, pokedex_number, generation, evolution_stage, evolved, family_id, cross_gen, type_one, type_two, weather_one, weather_two, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, is_new, not_gettable, future_evolve, cp_100_40, cp_100_39}: IPokemonList){
    let options ={}
    if(search){
      options = {
        ...options,
        where: [
          {name: Like(`%${search}%`)},
          {type_one : Like(`%${search}%`)},
          {type_two : Like(`%${search}%`)},
          {weather_one : Like(`%${search}%`)},
          {weather_two : Like(`%${search}%`)},
        ]
      }
    }
    
    if(name || pokedex_number || generation || evolution_stage || evolved || family_id || cross_gen || type_one || type_two || weather_one || weather_two || stat_total || atk || def || sta || legendary || aquireable || spawns || regional || raidable || hatchable || shiny || nest || is_new || not_gettable || future_evolve || cp_100_40 || cp_100_39){
      let params = {}
      if(name)
        params = {...params, name}
      if(pokedex_number)
        params = {...params, pokedex_number}
      if(generation)
        params = {...params, generation}
      if(evolution_stage)
        params = {...params, evolution_stage}
      if(evolved)
        params = {...params, evolved}
      if(family_id)
        params = {...params, family_id}
      if(cross_gen)
        params = {...params, cross_gen}
      if(type_one)
        params = {...params, type_one}
      if(type_two)
        params = {...params, type_two}
      if(weather_one)
        params = {...params, weather_one}
      if(weather_two)
        params = {...params, weather_two}
      if(stat_total)
        params = {...params, stat_total}
      if(atk)
        params = {...params, atk}
      if(def)
        params = {...params, def}
      if(sta)
        params = {...params, sta}
      if(legendary)
        params = {...params, legendary}
      if(aquireable)
        params = {...params, aquireable}
      if(spawns)
        params = {...params, spawns}
      if(regional)
        params = {...params, regional}
      if(raidable)
        params = {...params, raidable}
      if(hatchable)
        params = {...params, hatchable}
      if(shiny)
        params = {...params, shiny}
      if(nest)
        params = {...params, nest}
      if(is_new)
        params = {...params, is_new}
      if(not_gettable)
        params = {...params, not_gettable}
      if(future_evolve)
        params = {...params, future_evolve}
      if(cp_100_40)
        params = {...params, cp_100_40}
      if(cp_100_39)
        params = {...params, cp_100_39}

      options = {
        where: params
      }
    }

    const pokemon = await this.pokemonRepository.find({
      ...options,
      skip: (parseInt(page) - 1) * 10,
      take: 10,
    });

    return pokemon;
  }

  async show(id: string){
    const pokemon = await this.pokemonRepository.findOne(id)
    return pokemon;
  }

  async store({name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen, type_one, type_two, weather_one, weather_two, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, is_new, not_gettable, future_evolve, cp_100_40, cp_100_39}:IPokemonStore){
    const pokemonExists = await this.pokemonRepository.findOne({
      where:{
        name
      }
    })

    if(pokemonExists)
      throw new Error("Esse pokemon já foi cadastrado");

    const url_img_pokemon = await getImgPokemon(name);
    
    const pokemon = this.pokemonRepository.create({
      name, 
      url_img_pokemon,
      pokedex_number,
      img_name,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      type_one,
      type_two,
      weather_one,
      weather_two,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      is_new,
      not_gettable,
      future_evolve,
      cp_100_40,
      cp_100_39
    });

    await this.pokemonRepository.save(pokemon);

    return { success: 'Pokemon cadastrado com sucesso' };
  }

  async update({id, name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen, type_one, type_two, weather_one, weather_two, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, is_new, not_gettable, future_evolve, cp_100_40, cp_100_39}:IPokemonEdit){
    const pokemonExists = await this.pokemonRepository.findOne({
      id
    })

    if(!pokemonExists)
      throw new Error("Pokemon não encontrado");
      
    const pokemon = this.pokemonRepository.merge(pokemonExists, {
      name, 
      pokedex_number,
      img_name,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      type_one,
      type_two,
      weather_one,
      weather_two,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      is_new,
      not_gettable,
      future_evolve,
      cp_100_40,
      cp_100_39
    })

    await this.pokemonRepository.save(pokemon);

    return { success: 'Pokemon alterado com sucesso' };
  }

  async delete(id:string){
    const pokemonExists = await this.pokemonRepository.findOne({
      id
    });

    if(!pokemonExists)
      throw new Error('Pokemon não encontrado');
    
    await this.pokemonRepository.remove(pokemonExists);

    return { success: 'Pokemon deletado com sucesso' };
  }
}

export { PokemonService }