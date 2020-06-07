import { Request, Response } from 'express';
import knex from '../database/connection';
import path from 'path';
class PokemonController {
    async create(request: Request, response: Response) {
        
        const {
            name,
            pokedex_number,
            generation,
            evolution_stage,
            family_id,
            atk,
            def,
            sta,
            max_cp_at_40,
            max_cp_at_39,
            type1,
            type2,
            weather1,
            weather2
        } = request.body;

        let null_image;

        if(!request.file)
            null_image = 'NoImage.png';
        else
            null_image = request.file.filename;

        const pokemon = {
            name,
            pokedex_number,
            image: null_image,
            generation,
            evolution_stage,
            family_id,
            atk,
            def,
            sta,
            max_cp_at_40,
            max_cp_at_39,
            type1,
            type2,
            weather1,
            weather2
        }

        const ids = await knex('pokemon').insert(pokemon);

        return response.json({
            id: ids[0], ...pokemon
        });

    }

    async index(request: Request, response: Response) {
        const { pages, rows, filter = "" } = request.query;

        const parsedRows = String(rows)
            .split(',')
            .map(row => Number(row.trim()));
        const parsedPages = String(pages)
            .split(',')
            .map(row => Number(row.trim()));

        const pokemons = await knex('pokemon as q')
            .limit(parsedRows[0])
            .offset((parsedPages[0] - 1) * parsedRows[0])
            .where('q.name', 'LIKE', `%${String(filter)}%`)
            .orderBy('pokedex_number')
            .select('q.*', 'p.image as image_type1', 'p.name as name_type1', 'j.image as image_type2', 'j.name as name_type2'
                , 'y.image as image_weather1', 'y.name as name_weather1', 'z.image as image_weather2', 'z.name as name_weather2')
            .join('type as p', 'q.type1', '=', 'p.id')
            .leftJoin('type as j', 'q.type2', '=', 'j.id')
            .join('weather as y', 'q.weather1', '=', 'y.id')
            .leftJoin('weather as z', 'q.weather2', '=', 'z.id');


        const serializedPokemons = pokemons.map(pokemon => {
            return {
                ...pokemon,
                image_url: `http://localhost:3333/uploads/${pokemon.image}`,
                image_url_type1: `http://localhost:3333/uploads/${pokemon.image_type1}`,
                image_url_type2: (pokemon.name_type2 != null) ? `http://localhost:3333/uploads/${pokemon.image_type2}` : `http://localhost:3333/uploads/null.png`,
                image_url_weather1: `http://localhost:3333/uploads/${pokemon.image_weather1}`,
                image_url_weather2: (pokemon.name_weather2 != null) ? `http://localhost:3333/uploads/${pokemon.image_weather2}` : `http://localhost:3333/uploads/null.png`
            };
        });
        return response.json(serializedPokemons);
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const pokemon = await knex('pokemon').where('id', id).first();

        if (!pokemon)
            return response.json('Pokemon not found!')

        pokemon.image = `http://localhost:3333/uploads/${pokemon.image}`;

        return response.json(pokemon);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        await knex('pokemon').where('id', id).delete();
        return response.status(204).send();
    }

    async update(request: Request, response: Response) {
        const fs = require('fs');
        const { id } = request.params;
        const {
            name,
            pokedex_number,
            generation,
            evolution_stage,
            family_id,
            atk,
            def,
            sta,
            max_cp_at_40,
            max_cp_at_39,
            type1,
            type2,
            weather1,
            weather2
        } = request.body;
        
        let null_image;

        if(!request.file)
            null_image = 'NoImage.png';
        else
            null_image = request.file.filename;

        await knex('pokemon').where('id', id).update({
            name: name,
            pokedex_number: pokedex_number,
            image: null_image,
            generation: generation,
            evolution_stage: evolution_stage,
            family_id: family_id,
            atk: atk,
            def: def,
            sta: sta,
            max_cp_at_40: max_cp_at_40,
            max_cp_at_39: max_cp_at_39,
            type1: type1,
            type2: type2,
            weather1: weather1,
            weather2: weather2
        })

        return response.status(200).send();

    }
}

export default PokemonController;