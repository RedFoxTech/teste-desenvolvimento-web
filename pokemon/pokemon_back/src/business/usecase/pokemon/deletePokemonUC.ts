import { PokemonGateway } from "../../gateways/pokeGateway";


export class DeletePokemonUC{
    constructor(
        private pokemonGateway: PokemonGateway
    ){}

    public async execute(input: DeletePokemonUCInput): Promise<DeletePokemonUCOutput>{
    
        const pokemon = await this.pokemonGateway.getPokemonByid(input.id);

        console.log(input.id)
        if(!pokemon){
            throw new Error("Pokemon not found")
        }

        await this.pokemonGateway.deletePokemon(input.id)

        return{
            message: `Pokemon ${input.id} Deleted successfully!`
        }
    }

}

export interface DeletePokemonUCInput{
    id: string;
}

export interface DeletePokemonUCOutput{
    message: string;
}