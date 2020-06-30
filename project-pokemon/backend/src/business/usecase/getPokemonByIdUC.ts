import {PokemonGateway} from '../gateway/pokemonGateway';
import {Pokemon} from '../entities/pokemon';

export class GetPokemonByIdUC{
    constructor(private db: PokemonGateway){}

    public async execute(input: GetPokemonByIdInput): Promise<GetPokemonByIdOutput>{
        const pokemon = await this.db.getPokemonsById(input.id)
        if(!pokemon){
            throw new Error("Erro ao encontrar Pokemon")
        }
        return({ pokemon })
    }
}

interface GetPokemonByIdInput{
    id: string
}

interface GetPokemonByIdOutput{
    pokemon: Pokemon
}