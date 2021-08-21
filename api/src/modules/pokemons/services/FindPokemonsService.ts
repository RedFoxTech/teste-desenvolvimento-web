import axios from 'axios';

import AppError from "../../../shared/infra/errors/AppError";

import FindPokemonsDTO from "../dtos/FindPokemonsDTO";
import PokemonRepository from "../infra/typeorm/repositories/PokemonRepository";

class FindPokemonsService {
    async findPokemons({
        name,
        type
    }: FindPokemonsDTO) {
        try {
            const pokemonRepository = new PokemonRepository();

            const pokemons = await pokemonRepository.findPokemons({
                name,
                type
            });

            if(pokemons.length === 0) {
                return;
            }
            
            const pokemonsWithSprite = await Promise.all(pokemons.map(async pokemon => {
                const pokeApiRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokedex_number}`);

                if(pokeApiRes.status === 200) {
                    const pokemonData = pokeApiRes.data;

                    const {
                        sprites
                    } = pokemonData;

                    const {
                        'official-artwork': artkwork
                    } = sprites.other;

                    return {
                        ...pokemon,
                        sprite_url: artkwork.front_default
                    }
                }

                return {
                    ...pokemon,
                    sprite_url: ""
                }
            }));

            return pokemonsWithSprite;
        } catch(err) {
            throw new AppError(err);
        }
    }
};

export default FindPokemonsService;