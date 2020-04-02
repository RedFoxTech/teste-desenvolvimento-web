import { PokemonGateway } from "../gateways/pokemonGateway";

export class GetQuantityOfPagesUC {
    constructor(private db:PokemonGateway){}

    public async execute(): Promise<GetQuantityOfPagesOutput>{

        const numberOfPokemons = await this.db.getNumberOfPokemons()

        let quantityOfPages = Math.ceil(numberOfPokemons / 12)

        return ({
            quantityOfPages
        })
    }
}

interface GetQuantityOfPagesOutput {
    quantityOfPages: number
}