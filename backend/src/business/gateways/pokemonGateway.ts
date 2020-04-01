import { Pokemon } from "../entities/pokemon";

export interface PokemonGateway {
    getPokemons(offset:number):Promise<Pokemon[]>
    getNumberOfPokemons():Promise<number>
    getPokemonByNameOrNumber(nameOrNumber:string):Promise<Pokemon[]>
    getPokemonById(id: string): Promise<Pokemon>
}