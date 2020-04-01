import { PokemonGateway } from "../gateways/pokemonGateway";
import { Pokemon } from "../entities/pokemon";

export class GetPokemonByIdUC {
    constructor(private db: PokemonGateway) { }

    public async execute(input: GetPokemonById): Promise<GetPokemonByIdOutput> {
        console.log(input.pokemonId)
        const pokemon = await this.db.getPokemonById(input.pokemonId)

        if(!pokemon){
            throw new Error("Pokemon não encontrado")
        }

        return ({
            pokemon
        })
        
    }
}

interface GetPokemonById {
    pokemonId: string
}

interface GetPokemonByIdOutput {
    pokemon: Pokemon
}