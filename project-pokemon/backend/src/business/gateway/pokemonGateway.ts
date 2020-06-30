import { Pokemon } from "../entities/pokemon";

export interface PokemonGateway {
    getPokemons(offset:number): Promise<Pokemon[]>
    getPokemonsById(id: string):Promise<Pokemon>
    getNumberOfPokemons():Promise<number>
    getPokemonByName(nameOfPokemon: string): Promise<Pokemon[]>
}