import { BaseDataBase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDataBase {
  protected tableName: string = "PokemonGo";

  public async getAllPokemons(offset: number): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} LIMIT 10 OFFSET ${offset}
    `);
    return result[0]
  }

  public async pokemonFilter(filterName: string, filterType: string): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE ${filterType} = '${filterName}'
    `);
    return result[0]
  }

  public async deletePokemon(pokemonId: number): Promise<any> {
    const result = await super.getConnection()
      .delete()
      .from(this.tableName)
      .where(`id`, '=', pokemonId)
    return result
  }
}
