import { PokemonGateway } from "../gateways/pokemonGateway";
import { Pokemon } from "../entities/pokemon";

export class GetPokemonByNameOrNumberUC {
    constructor(private db: PokemonGateway) { }

    public async execute(input: GetPokemonByNameOrNumberInput): Promise<GetPokemonByNameOrNumberOutput> {

        const pokemons = await this.db.getPokemonByNameOrNumber(input.nameOrNumber)

        return ({
            pokemons
        })
        
    }
}

interface GetPokemonByNameOrNumberInput {
    nameOrNumber: string
}

interface GetPokemonByNameOrNumberOutput {
    pokemons: Pokemon[]
}