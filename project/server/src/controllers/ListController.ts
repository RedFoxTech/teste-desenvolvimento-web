import { Request, Response } from 'express';
import knex from '../database/connection';

class ListController {
    async index(request: Request, response: Response) {
        const pokemons = await knex('controlPokemon').select('*');
        
        return response.json(pokemons);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const pokemonId = await knex('controlPokemon').where('id', id).first();

        if (!pokemonId) {
            return response.status(400).json({ message: 'Pokemon não encontrado'});
        }

        return response.json(pokemonId);
    }

    
}

export default ListController;