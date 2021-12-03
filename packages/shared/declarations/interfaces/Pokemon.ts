import PokemonType from '../enums/PokemonType';
import PokemonWeather from '../enums/Weather';

/**
 * @description Interface para o contrato de tipos do modelo de pokémons
 * @interface Pokemon
 * @see {@link module:packages/backend/models/Pokemon}
 * @module packages/shared/declarations/interfaces/Pokemon
 * @since 30/07/2021
 * @version 0.0.2
 */

interface Pokemon {
    _id?: string;
    row: number,
    name: string,
    pokedexId: number,
    imageName: string,
    generation: string,
    evolutionState: string,
    evolved: boolean,
    familyId?: number,
    crossGeneration: boolean,
    type1: PokemonType,
    type2?: PokemonType,
    weather1: PokemonWeather,
    weather2?: PokemonWeather,
    statsSum: number,
    attack: number,
    defense: number,
    staminaHP: number,
    legendary: boolean,
    acquirable: boolean,
    spawns: boolean,
    regional: boolean,
    raidable: number,
    hatchable: number,
    shiny: boolean,
    nest: boolean,
    isNewPokemon: boolean,
    notGettable: boolean,
    futureEvolve: boolean,
    fullCPLevel40: number,
    fullCPLevel39: number,
}

export default Pokemon;
