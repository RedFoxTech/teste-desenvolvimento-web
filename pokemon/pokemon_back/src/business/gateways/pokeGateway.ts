import { Pokemon } from "../entites/pokemon";

export interface PokemonGateway {
    registerPoke(pokemon: Pokemon): Promise<void>;
    getPokemonByid(id: string): Promise<Pokemon | undefined>;
    updatePokemon(input: Partial<UpdatePokemonData>): Promise<void>;
    deletePokemon(id: string,): Promise<void>;
    getAllPokemons(limit: number, offset: number): Promise<Pokemon[] | undefined>;
    getPokemonByNameOrPokeID(nameOrPokedexID:string):Promise<Pokemon[] | undefined>


}

export interface UpdatePokemonData {
    id: string,
    pokedexID: number,
    name: string,
    img: string,
    generation: number,
    envolved: number,
    familyID: number,
    cross_gen: number,
    type1: string,
    type2: string,
    weather1: string,
    weather2: string,
    stat_total: number,
    atk: number,
    def: number,
    sta: number,
    shiny: number
}