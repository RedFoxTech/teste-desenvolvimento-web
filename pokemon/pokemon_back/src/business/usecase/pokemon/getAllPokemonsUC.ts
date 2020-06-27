import { PokemonGateway } from "../../gateways/pokeGateway";


export class GetAllPokemonsUC {
    constructor(
        private pokemonGateway: PokemonGateway
    ) { }

    private POKE_PER_PAGE = 12;

    public async execute(input: GetAllPokemonsUCInput): Promise<GetAllPokemonsUCOutput> {

        let page = input.page >= 1 ? input.page : 1;
        const offset = this.POKE_PER_PAGE * (page - 1)

        let pokes = await this.pokemonGateway.getAllPokemons(this.POKE_PER_PAGE, offset);

        if (!pokes) {
            pokes = []
        };

        return {
            pokemons: pokes.map(poke => {
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

export interface GetAllPokemonsUCInput {
    page: number;
}

export interface GetAllPokemonsUCOutput{
pokemons: GetAllPokemonsUCOutputPoke[];
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


