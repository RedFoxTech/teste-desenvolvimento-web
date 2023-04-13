import { iPokemonRepository } from "./repositories/iPokemonRepository";

export class PokemonService {
  constructor(private iPokemonRepository: iPokemonRepository) {}

  async createAllPokemons() {
    return this.iPokemonRepository.createAll();
  }

  async findAllPokemons() {
    return this.iPokemonRepository.findAll();
  }

  async findOnePokemon(pokemonId: number) {
    return this.iPokemonRepository.findOne(pokemonId);
  }
}
