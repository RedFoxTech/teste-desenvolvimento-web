import { BaseDB } from "./baseDB";
import { PokemonGateway } from "../business/gateways/pokemonGateway";
import { Pokemon } from "../business/entities/pokemon";

export class PokemonDB extends BaseDB implements PokemonGateway {

    public async getPokemons(offset: number): Promise<Pokemon[]> {

        const pokemons = await this.connection
            .select('*')
            .from('pokemons')
            .orderBy('pokedexNumber', 'asc')
            .limit(12)
            .offset(offset)

        return pokemons.map((pokemon: any) => {
            return new Pokemon(
                pokemon.id,
                pokemon.name,
                pokemon.pokedexNumber,
                pokemon.sprite,
                pokemon.generation,
                pokemon.evolutionStage,
                pokemon.evolved,
                pokemon.familyId,
                pokemon.typeOne,
                pokemon.typeTwo,
                pokemon.weatherOne,
                pokemon.weatherTwo,
                pokemon.attack,
                pokemon.defense,
                pokemon.stamina,
                pokemon.MAX_CP_LVL_40,
                pokemon.MAX_CP_LVL_39
            )
        })
    }

    public async getNumberOfPokemons(): Promise<number> {

        const result: any = await this.connection('pokemons')
            .count('*', { as: 'pokemons' })

        return result[0].pokemons

    }

    public async getPokemonByNameOrNumber(nameOrNumber: string): Promise<Pokemon[]> {

        const pokemons = await this.connection("pokemons")
            .where('name', 'like', `${nameOrNumber}%`)
            .orWhere('pokedexNumber', 'like', `${nameOrNumber}`)
            
        return pokemons.map((pokemon: any) => {
            return new Pokemon(
                pokemon.id,
                pokemon.name,
                pokemon.pokedexNumber,
                pokemon.sprite,
                pokemon.generation,
                pokemon.evolutionStage,
                pokemon.evolved,
                pokemon.familyId,
                pokemon.typeOne,
                pokemon.typeTwo,
                pokemon.weatherOne,
                pokemon.weatherTwo,
                pokemon.attack,
                pokemon.defense,
                pokemon.stamina,
                pokemon.MAX_CP_LVL_40,
                pokemon.MAX_CP_LVL_39
            )
        })
    }

    public async getPokemonById(id: string): Promise<Pokemon> {

        const pokemon = await this.connection("pokemons")
            .where({id})
            .select("*")
        
        return new Pokemon(
            pokemon[0].id,
            pokemon[0].name,
            pokemon[0].pokedexNumber,
            pokemon[0].sprite,
            pokemon[0].generation,
            pokemon[0].evolutionStage,
            pokemon[0].evolved,
            pokemon[0].familyId,
            pokemon[0].typeOne,
            pokemon[0].typeTwo,
            pokemon[0].weatherOne,
            pokemon[0].weatherTwo,
            pokemon[0].attack,
            pokemon[0].defense,
            pokemon[0].stamina,
            pokemon[0].MAX_CP_LVL_40,
            pokemon[0].MAX_CP_LVL_39
        )
    }
}
