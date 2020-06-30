import {PokemonGateway} from '../gateway/pokemonGateway';
import {Pokemon} from '../entities/pokemon';

export class GetPokemonUC{
    constructor(private db:PokemonGateway){}

    public async execute(input: GetPokemonsInput): Promise<GetPokemonsOutput>{
        const offset = 12 * (input.numbersPage -1)
        const pokemons = await this.db.getPokemons(offset)
        return({ pokemons })
    }
}

interface GetPokemonsInput{
    numbersPage: number
}

interface GetPokemonsOutput{
    pokemons: Pokemon[]
}