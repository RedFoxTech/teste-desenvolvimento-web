import { PokemonGateway } from "../gateways/pokemonGateway";
import { Pokemon } from "../entities/pokemon";

export class GetPokemonsUC {
    constructor(private db:PokemonGateway){}

    public async execute(input:GetPokemonsInput): Promise<GetPokemonsOutPut>{

        const offset = 12 * (input.page - 1)

        const pokemons = await this.db.getPokemons(offset)


        return ({
            pokemons
        })
    }
}

interface GetPokemonsInput {
    page: number
}

interface GetPokemonsOutPut {
    pokemons: Pokemon[]
}