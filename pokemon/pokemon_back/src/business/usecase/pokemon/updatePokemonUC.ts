import { PokemonGateway } from "../../gateways/pokeGateway";


export class UpdatePokemonUC {
    constructor(
        private pokemonGateway: PokemonGateway,
    ) { }

    public async execute(input: UpdatePokemonUCInput): Promise<UpdatePokemonUCOutput> {

        const pokemon = await this.pokemonGateway.getPokemonByid(input.id)

        // if (!pokemon) {
        //     throw new Error("Pokemon not found");
        // }
        await this.pokemonGateway.updatePokemon(input)

        return {
            message: `Pokemon ${input.name} updated successfully!`
        }
    }
}

export interface UpdatePokemonUCInput {
    id: string;
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

export interface UpdatePokemonUCOutput {
    message: string;
}