import { PokemonGateway } from "../gateway/pokemonGateway";
import { Pokemon } from "../entities/pokemon";


export class GetPokemonByNameUC {
    constructor(private db: PokemonGateway){}

    public async execute(input: GetPokemonByNameInput): Promise<GetPokemonByNameOutput>{
        const pokemons =  await this.db.getPokemonByName(input.nameOfPokemon)
        if(!pokemons){
            throw new Error("Erro ao encontrar Pokemon")
        }
        return({ pokemons })
    }
}

interface GetPokemonByNameInput{
    nameOfPokemon:string
}

interface GetPokemonByNameOutput{
    pokemons: Pokemon[]
}