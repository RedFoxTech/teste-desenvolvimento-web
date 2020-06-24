import { Pokemon } from "../business/entites/pokemon";
import { BaseDB } from "../data/baseDatabase";
import { PokemonGateway, UpdatePokemonData } from "../business/gateways/pokeGateway";



export class PokemonDB extends BaseDB implements PokemonGateway {
    private pokemonTable = "pokemon";

    private mapPokemonToDBPokemon(input: any): Pokemon | undefined {
        return (
            input &&
            new Pokemon(
                input.id,
                input.pokedexID,
                input.name,
                input.img,
                input.generation,
                input.envolved,
                input.familyID,
                input.cross_gen,
                input.type1,
                input.type2,
                input.weather1,
                input.weather2,
                input.stat_total,
                input.atk,
                input.def,
                input.sta,
                input.shiny
            )
        );
    };

    public async registerPoke(pokemon: Pokemon): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.pokemonTable} (
                id, 
                pokedexID, 
                name, 
                img, 
                generation, 
                envolved, 
                familyID, 
                cross_gen, 
                type1, 
                type2, 
                weather1, 
                weather2, 
                stat_total, 
                atk, 
                def, 
                sta, 
                shiny
                )
                VALUES(
                    '${pokemon.getId()}',
                    '${pokemon.getPokedexID()}',
                    '${pokemon.getName()}',
                    '${pokemon.getImg()}',
                    '${pokemon.getGeneration()}',
                    '${pokemon.getEnvolved()}',
                    '${pokemon.getFamilyID()}',
                    '${pokemon.getCross_gen()}',
                    '${pokemon.getType1()}',
                    '${pokemon.getType2()}',
                    '${pokemon.getWeather1()}',
                    '${pokemon.getWeather2()}',
                    '${pokemon.getStat_total()}',
                    '${pokemon.getAtk()}',
                    '${pokemon.getDef()}',
                    '${pokemon.getSta()}',
                    '${pokemon.getShiny()}'
                    )
            `);
    };


    public async getPokemonByid(id: string): Promise< Pokemon | void>{
        const result = await this.connection.raw(`
            SELECT * 
            FROM ${this.pokemonTable} p
            WHERE p.id '${id}'  
        `)

        if(!result[0][0]){
            return undefined;
        }

    }


    public async updatePokemon(input:Partial<UpdatePokemonData>){
        await this.connection(this.pokemonTable).update(input) .where({id:input.id})
    }





    // public async updatePoke(
    //     id: string,
    //     pokedexID: number,
    //     name: string,
    //     img: string,
    //     generation: number,
    //     envolved: number,
    //     familyID: number,
    //     cross_gen: number,
    //     type1: string,
    //     type2: string,
    //     weather1: string,
    //     weather2: string,
    //     stat_total: number,
    //     atk: number,
    //     def: number,
    //     sta: number,
    //     shiny: number): Promise<void> {
       
    //         await this.connection.raw(`
    //             UPDATE ${this.pokemonTable}
    //             SET pokedexID = '${pokedexID}', name = '${name}', img = '${img}', generation = '${generation}', envolved = '${envolved}', familyID = '${familyID}',
    //             cross_gen = '${cross_gen}', type1 = '${type1}', type2 = '${type2}', weather1 = '${weather1}', weather2 = '${weather2}', stat_total = '${stat_total}',
    //             atk = '${atk}', def = '${def}', sta = '${sta}', shiny = '${shiny}' 
    //             WHERE id = '${id}' 
    //         `)
    // }
}


