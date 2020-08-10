import { BaseDatabase } from "./BaseDatabase";
import { Pokemon } from "../model/Pokemon/Pokemon";


export class PokemonDatabase extends BaseDatabase {
    public static TABLE_NAME: string = '';

    private toModel(dbResult?: any): Pokemon | undefined {
        return (
            dbResult && new Pokemon(
                dbResult.id,
                dbResult.name,
                dbResult.number,
                dbResult.generation,
                dbResult.evolution_stage,
                dbResult.evolved,
                dbResult.familyId,
                dbResult.cross_gen,
                dbResult.type1,
                dbResult.type2,
                dbResult.weather1,
                dbResult.weather2,
                dbResult.stat_total,
                dbResult.atk,
                dbResult.def,
                dbResult.sta,
                dbResult.legendary,
                dbResult.aquireable,
                dbResult.spawns,
                dbResult.regional,
                dbResult.raidable,
                dbResult.hatchable,
                dbResult.shiny,
                dbResult.nest,
                dbResult.new_New,
                dbResult.not_gettable,
                dbResult.future_envolbe,
                dbResult.cp_40,
                dbResult.cp_39
            )
        )
    }
    public async createPokemon(pokemon: Pokemon): Promise<void> {
        await this.connection()
            .insert({
                id: pokemon.getId(),
                name: pokemon.getName(),
                number: pokemon.getNumber(),
                generation: pokemon.getGeneration(),
                evolution_stage: pokemon.getEvolutionStage(),
                evolved: pokemon.getEvolved(),
                familyId: pokemon.getFamilyId(),
                cross_gen: pokemon.getCrossGen(),
                type1: pokemon.getType1(),
                type2: pokemon.getType2(),
                weather1: pokemon.getWeather1(),
                weather2: pokemon.getWeather2(),
                stat_total: pokemon.getStatTotal(),
                atk: pokemon.getAtk(),
                def: pokemon.getDef(),
                sta: pokemon.getSta(),
                legendary: pokemon.getLegendary(),
                aquireable: pokemon.getAquireable(),
                spawns: pokemon.getSpawns(),
                regional: pokemon.getRegional(),
                raidable: pokemon.getRaidable(),
                hatchabel: pokemon.getHatchable(),
                shiny: pokemon.getShiny(),
                nest: pokemon.getNest(),
                new_New: pokemon.getNew(),
                not_gettable: pokemon.getNotGettable(),
                future_evolve: pokemon.getFutureEvolve(),
                cp_40: pokemon.getCp40(),
                cp_39: pokemon.getCp39()
            }).into(PokemonDatabase.TABLE_NAME)
    }
    public async getPokemonById(id: string): Promise<Pokemon | undefined> {
        const result = await this.connection()
            .select("*")
            .from(PokemonDatabase.TABLE_NAME)
            .where({ id })
        return this.toModel(result[0])
    }
    public async getAllPokemons(): Promise<Pokemon[]> {
        const result = await super.connection().raw(`
            SELECT * 
            FROM ${PokemonDatabase.TABLE_NAME}
        `)
        return result[0].map((res: any) => this.toModel(res))
    }
   public async editPokemons(id: string,name: string, number: number, generation: number, evolution_stage: number, evolved: number, familyId: number, cross_gen: number,type1: string, type2: string, weather1: string, weather2: string, stat_total: number, atk: number, def: number, sta: number, legendary: number, aquireable: number, spawns: number, regional: number, raidable: number, hatchable: number, shiny: number, nest: number, new_New: number, not_gettable: number, future_evolve: number,  cp_40: number, cp_39: number)
   : Promise<any | undefined> {
       await super.connection().raw(`
       UPDATE ${PokemonDatabase.TABLE_NAME}
       SET name = "${name}", 
       number = "${number}",
       generation = "${generation}",
       evolution_stage = "${evolution_stage}",
       evolved = "${evolved}"
       familyId = "${familyId}", 
       cross_gen = "${cross_gen}",
       type1 = "${type1}",
       type2 = "${type2}",
       weather1 = "${weather1}"
       weather2 = "${weather2}"
       stat_total = "${stat_total}"
       atk = "${atk}"
       def = "${def}"
       sta = "${sta}"
       legendary = "${legendary}"
       aquireable = "${aquireable}"
       spawns = "${spawns}"
       regional = "${regional}"
       raidable = "${raidable}"
       hatchable = "${hatchable}"
       shiny = "${shiny}"
       nest = "${nest}"
       new_New = "${new_New}"
       not_gettable = "${not_gettable}"
       future_evolve = "${future_evolve}"
       cp_40 = "${cp_40}"
       cp_39 = "${cp_39}"
     WHERE id = "${id}";  
       `)
   } 
  public async deletePokemon(id:string): Promise<void> {
      await super.connection().raw(`
      DELETE FROM ${PokemonDatabase.TABLE_NAME}
      WHERE id = "${id}";
      `)
  } 
}