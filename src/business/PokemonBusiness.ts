import { PokemonDatabase } from "../data/PokemonDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Pokemon } from "../model/Pokemon/Pokemon";



export class PokemonBusiness {
    constructor(
        private pokemonDataBase: PokemonDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) { }

    public async registerPokemon(
        name: string,
        number: number,
        generation: number,
        evolution_stage: number,
        evolved: number,
        familyId: number,
        cross_gen: number,
        type1: string,
        type2: string,
        weather1: string,
        weather2: string,
        stat_total: number,
        atk: number,
        def: number,
        sta: number,
        legendary: number,
        aquireable: number,
        spawns: number,
        regional: number,
        raidable: number,
        hatchable: number,
        shiny: number,
        nest: number,
        new_New: number,
        not_gettable: number,
        future_evolve: number,
        cp_40: number,
        cp_39: number
    ) {
        if (!name) {
            throw new Error("Invalid Params, try again!");
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        const pokemon = new Pokemon(id, name, number, generation, evolution_stage, evolved, familyId, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new_New, not_gettable, future_evolve, cp_40, cp_39)

        const pokemonDataBase = new PokemonDatabase()
        await pokemonDataBase.createPokemon(pokemon)

        return {
            id: id
        }
    }
    public async getAllPokemons() {
        const pokemonDataBase = new PokemonDatabase()
        const pokemon = await pokemonDataBase.getAllPokemons()

        return pokemon
    }
    public async editPokemon(
        name: string,
        number: number,
        generation: number,
        evolution_stage: number,
        evolved: number,
        familyId: number,
        cross_gen: number,
        type1: string,
        type2: string,
        weather1: string,
        weather2: string,
        stat_total: number,
        atk: number,
        def: number,
        sta: number,
        legendary: number,
        aquireable: number,
        spawns: number,
        regional: number,
        raidable: number,
        hatchable: number,
        shiny: number,
        nest: number,
        new_New: number,
        not_gettable: number,
        future_evolve: number,
        cp_40: number,
        cp_39: number
    ) {
        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        const pokemonDataBase = new PokemonDatabase()
        const pokemon = await pokemonDataBase.editPokemons(id, name, number, generation, evolution_stage, evolved, familyId, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new_New, not_gettable, future_evolve, cp_40, cp_39)

        return pokemon
    }
    public async deletePokemon(id: string) {
        const pokemonDataBase = new PokemonDatabase()
        const pokemon = await pokemonDataBase.deletePokemon(id)

        return pokemon
    }
}