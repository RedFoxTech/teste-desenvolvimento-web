import { PokemonGateway } from "../gateway/pokemonGateway";

export class QuantityOfPageUC {
    constructor(private db:PokemonGateway){}

    public async execute(): Promise<GetQuantityOfPagesOutput>{
        const numberPokemons = await this.db.getNumberOfPokemons()

        let quantityOfPages = Math.ceil(numberPokemons / 12)
        return ({
            quantityOfPages
        })
    }
}

interface GetQuantityOfPagesOutput {
    quantityOfPages: number
}