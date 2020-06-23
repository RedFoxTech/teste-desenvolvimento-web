import { Request, Response } from 'express';
import knex from '../database/connection';

class PokemonsController {
    async create (request: Request, response: Response) {
        const {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyId,
            type1,
            type2,
            weather1,
            weather2
        } = request.body;

        const pokemon = {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyId,
            type1,
            type2,
            weather1,
            weather2
        }
    
        await knex('controlPokemon').insert(pokemon)
    
        return response.json({
            ... pokemon
        });
    }
}

export default PokemonsController;