import { PokemonDatabase } from "../data/PokemonDatabase";

export class PokemonBusiness {
  constructor(
    private PokemonDatabase: PokemonDatabase
  ) { }

  public async getAllPokemons(page: number) {
    const offset = (page - 1) * 10
    const pokemonList = await this.PokemonDatabase.getAllPokemons(offset);
    return pokemonList
  }

  public async pokemonFilter(filterName: string, filterType: string) {
    const pokemonList = await this.PokemonDatabase.pokemonFilter(filterName, filterType);
    return pokemonList
  }

  public async deletePokemon(pokemonId: number) {
    const deletePokemon = await this.PokemonDatabase.deletePokemon(pokemonId);
    return deletePokemon
  }
}
