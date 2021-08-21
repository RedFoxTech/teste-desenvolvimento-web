import { getRepository } from 'typeorm';

import Pokemon from '../entities/Pokemon';

import CreatePokemonDTO from '../../../dtos/CreatePokemonDTO';
import FindPokemonsDTO from '../../../dtos/FindPokemonsDTO';

class PokemonRepository {
    async create({
        name,
        pokedex_number,
        type_1,
        type_2,
        weather_1,
        weather_2,
        stat_total,
        atk,
        def,
        sta,
    }: CreatePokemonDTO) {
        const repository = getRepository(Pokemon);

        const createdPokemon = repository.create({
            name,
            pokedex_number,
            type_1,
            type_2,
            weather_1,
            weather_2,
            stat_total,
            atk,
            def,
            sta,
        });

        await repository.save(createdPokemon);

        return createdPokemon;
    }

    async findPokemonByPokedexNumber(pokedex_number: number) {
        const repository = getRepository(Pokemon);

        if(!pokedex_number) {
            return false;
        }

        const pokemon = await repository.findOne({
            where: {
                pokedex_number
            }
        });

        return pokemon;
    }

    async findPokemons({
        name,
        type
    }: FindPokemonsDTO) {
        const repository = getRepository(Pokemon);

        const queryBuilder = repository.createQueryBuilder()
            .select()

        if(name && name !== "") {
            queryBuilder.where(`name @@ to_tsquery('${name}:*')`)
        }

        if(type && type !== ""){
            if(name && name !== "") {
                queryBuilder.orWhere(`type_1 @@ to_tsquery('${type}:*') OR type_2 @@ to_tsquery('${type}:*')`)
            } else {
                queryBuilder.where(`type_1 @@ to_tsquery('${type}:*') OR type_2 @@ to_tsquery('${type}:*')`)
            }
        }

        const pokemons = await queryBuilder
            .orderBy("name", "ASC")
            .getMany();

        return pokemons;
    }
};

export default PokemonRepository;