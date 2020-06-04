import { Request, Response } from 'express';
import knex from '../database/connection';

class PokemonsController {
    async index(request: Request, response: Response) {
        try {
            const { name, page = 1 } = request.query;

            /** If user inserted a search paremeter */
            if (name) {
                const filteredPokemons = await knex('pokemons')
                .where('name', 'like', `%${String(name)}%`)
                .limit(10)
                .offset((Number(page) - 1) * 10)
                .select('*');
                return response.json(filteredPokemons);
            }

            /** If user did not insert a search parameter */
            const pokemons = await knex('pokemons')
            .limit(10)
            .offset((Number(page) - 1) * 10)
            .select('*');;
            return response.json(pokemons);
            
        } catch(err) {
            return response.status(400).json({error: err});
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const pokemon = await knex('pokemons').where('id', id).first();
            return response.json(pokemon);
        } catch(err) {
            return response.status(400).json({error: err});
        }

    }

    async create(request: Request, response: Response) {
    /** Trabalhei na inserção dos pokemons com apenas alguns campos presentes na planilha fornecida  */
        try {
            const { name, type_1, type_2 } = request.body;
            
            const pokemon = { name, type_1, type_2};

            const insertedPokemon = await knex('pokemons').insert(pokemon);

            const insertedPokemonId = insertedPokemon[0];

            return response.json({...pokemon, insertedPokemonId});
        } catch(err) {
            return response.status(400).json({error: err});
        }
    }

    async update(request: Request, response: Response) {
    /** Trabalhei na atualização dos pokemons com apenas alguns campos presentes na planilha fornecida  */
        try {
            const { name, pokedex_number, generation, type_1, type_2 } = request.body;
            const { id } = request.params;

            const updatedPokemon = await knex('pokemons')
            .where('id', id)
            .first()
            .update({
                name, pokedex_number, generation, type_1, type_2
            })

            return response.json({message: "Pokemon updated successfully"});
        } catch(err) {
            return response.status(400).json({error: err});
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const deletedPokemon = await knex('pokemons').where('id', id).delete();

            return (deletedPokemon 
                ? response.json({message: 'Pokemon deleted successfully'}) 
                : response.json({message: 'Delete failed'})
                )
        } catch(err) {
            return response.status(400).json({error: err});
        }

     
    }

}

export default PokemonsController;