import { PokemonGateway } from "../../gateways/pokeGateway";
import { v4 } from "uuid";
import { Pokemon } from "../../entites/pokemon"

export class RegisterPokemonUC {
    constructor(
        private pokemonGateway: PokemonGateway,
    ) { }

    public async execute(input: RegisterPokemonUCInput): Promise<RegisterPokemonUCOutput> {

        const id = v4();

        const pokemon = new Pokemon(
            id,
            input.pokedexID,
            input.name,
            input.img,
            input.generation,
            input.envolved,
            input.familyID,
            input.cross_gen,
            input.type1,
            input.type2,
            input.weather1,
            input.weather2,
            input.stat_total,
            input.atk,
            input.def,
            input.sta,
            input.shiny
        )

        await this.pokemonGateway.registerPoke(pokemon)

        return{
            message: "Pokemon registered successfully !"
        }

    }
}

export interface RegisterPokemonUCInput {
    pokedexID: number;
    name: string;
    img: string;
    generation: number;
    envolved: number;
    familyID: number;
    cross_gen: number;
    type1: string;
    type2: string;
    weather1: string;
    weather2: string;
    stat_total: number;
    atk: number;
    def: number;
    sta: number;
    shiny: number;

}

export interface RegisterPokemonUCOutput {
    message: string;
}