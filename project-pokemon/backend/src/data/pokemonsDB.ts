import {BaseDatabase} from './baseDatabase';
import {PokemonGateway} from '../business/gateway/pokemonGateway';
import {Pokemon} from '../business/entities/pokemon';

export class PokemonDB extends BaseDatabase implements PokemonGateway{
    private pokemonTableName = "allPokemons"

    public async getPokemons(offset:number): Promise<Pokemon[]>{
        const pokemons = await this.connection
        .select('*')
        .from(this.pokemonTableName)
        .orderBy('id', 'asc')
        .limit(12)
        .offset(offset)

        return pokemons.map((pokemon: any) => {
            return new Pokemon(
                pokemon.id,
                pokemon.name,
                pokemon.pokedexNumber,
                pokemon.imgName,
                pokemon.generation,
                pokemon.evolutionStage,
                pokemon.envolved,
                pokemon.familyID,
                pokemon.type1,
                pokemon.type2,
                pokemon.weather1,
                pokemon.weather2,
                pokemon.statTotal,
                pokemon.atk,
                pokemon.def,
                pokemon.sta,
                pokemon.legendary,
                pokemon.cp40,
                pokemon.cp39
            )
        })
    }

    public async getNumberOfPokemons(): Promise<number> {
        const result: any = await this.connection(this.pokemonTableName)
            .count('*', { as: 'pokemons' })
        return result[0].pokemons
    }

    public async getPokemonByName(nameOfPokemon:string): Promise<Pokemon[]>{
        const pokemons =  await this.connection(this.pokemonTableName)
        .where('name', `${nameOfPokemon}`)

        return pokemons.map((pokemon: any) => {
            return new Pokemon(
                pokemon.id,
                pokemon.name,
                pokemon.pokedexNumber,
                pokemon.imgName,
                pokemon.generation,
                pokemon.evolutionStage,
                pokemon.envolved,
                pokemon.familyID,
                pokemon.type1,
                pokemon.type2,
                pokemon.weather1,
                pokemon.weather2,
                pokemon.statTotal,
                pokemon.atk,
                pokemon.def,
                pokemon.sta,
                pokemon.legendary,
                pokemon.cp40,
                pokemon.cp39
            )
        })
    }

    public async getPokemonsById(id: string): Promise<Pokemon>{
        const pokemon = await this.connection(this.pokemonTableName)
        .where({id})
        .select("*")

        return new Pokemon(
            pokemon[0].id,
            pokemon[0].name,
            pokemon[0].pokedexNumber,
            pokemon[0].imgName,
            pokemon[0].generation,
            pokemon[0].evolutionStage,
            pokemon[0].envolved,
            pokemon[0].familyID,
            pokemon[0].type1,
            pokemon[0].type2,
            pokemon[0].weather1,
            pokemon[0].weather2,
            pokemon[0].statTotal,
            pokemon[0].atk,
            pokemon[0].def,
            pokemon[0].sta,
            pokemon[0].legendary,
            pokemon[0].cp40,
            pokemon[0].cp39
        )
    }
}
