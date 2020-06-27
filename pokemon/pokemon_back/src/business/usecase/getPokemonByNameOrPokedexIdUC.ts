import { PokemonGateway } from "../gateways/pokeGateway";


export class GetPokemonByNameOrPokedexIdUC {
    constructor(private pokemonGateway: PokemonGateway) { }

    public async execute(input: GetPokemonByNameOrPokedexIdUCInput): Promise<GetPokemonByNameOrPokedexIdUCOutput>{

        let pokemons = await this.pokemonGateway.getPokemonByNameOrPokeID(input.nameOrPokedexID)

        if (!pokemons) {
            pokemons = []
        };

        return {
            pokemons: pokemons.map(poke => {
                return {
                    id: poke.getId(),
                    pokedexID: poke.getPokedexID(),
                    name:poke.getName(),
                    img:poke.getImg(),
                    generation:poke.getGeneration(),
                    envolved:poke.getEnvolved(),
                    familyID:poke.getFamilyID(),
                    cross_gen:poke.getCross_gen(),
                    type1:poke.getType1(),
                    type2:poke.getType2(),
                    weather1:poke.getWeather1(),
                    weather2:poke.getWeather2(),
                    stat_total:poke.getStat_total(),
                    atk:poke.getAtk(),
                    def:poke.getDef(),
                    sta:poke.getSta(),
                    shiny:poke.getShiny()
                }
            })
        }

    }

}

interface GetPokemonByNameOrPokedexIdUCInput{
    nameOrPokedexID: string
}

interface GetPokemonByNameOrPokedexIdUCOutput{
    pokemons: GetAllPokemonsUCOutputPoke[]

}

export interface GetAllPokemonsUCOutputPoke {
    id:string;
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

