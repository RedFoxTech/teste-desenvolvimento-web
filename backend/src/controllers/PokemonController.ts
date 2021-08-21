import { Request, Response } from 'express';
import { PokemonService } from '../services/PokemonService';

class PokemonController {

  async index(request: Request, response: Response){
    const pokemonService = new PokemonService();

    const {
      search,
      page,
      name, 
      pokedex_number,
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
    } = request.query;

    try{
      const pokemon = await pokemonService.index(
        search, 
        page, 
        name, 
        pokedex_number, 
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
      );
      
      return response.status(200).json(pokemon)
    }catch(err){
      return response.status(400).json({error: err.message});
    }
  }

  async show(request:Request, response: Response){
    const pokemonService = new PokemonService();

    const { id } = request.params;

    try{
      const pokemon = await pokemonService.show(id)

      return response.status(200).json(pokemon)
    }
    catch(err){
      return response.status(400).json({error: err.message});  
    }
  }

  async store(request: Request, response: Response): Promise<Response>{
    const pokemonService = new PokemonService();

    const { 
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
    } = request.body;

    try{
      const pokemon = await pokemonService.store({
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

      return response.status(201).json(pokemon)
    }  
    catch(err){
      return response.status(400).json({error: err.message});  
    }

  }

  async update(request: Request, response: Response): Promise<Response>{
    const pokemonService = new PokemonService();
    
    const { id } = request.params;
    
    const { 
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
    } = request.body;

    try{
      const pokemon = await pokemonService.update({
        id,
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

      return response.status(201).json(pokemon)
    }  
    catch(err){
      return response.status(400).json({error: err.message});  
    }

  }

  async delete(request: Request, response: Response){
    const pokemonService = new PokemonService();

    const { id } = request.params;

    try{
      const pokemon = await pokemonService.delete(id)

      return response.status(200).json(pokemon)
    }
    catch(err){
      return response.status(400).json({error: err.message});  
    }
  }
}

export { PokemonController }