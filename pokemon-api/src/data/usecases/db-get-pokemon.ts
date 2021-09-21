import { GetPokemonRepository } from 'data/protocols/get-pokemon-repository';
import { Pokemon } from 'domain/models';
import { GetPokemon } from 'domain/usecases/get-pokemon';

export class DBGetPokemon implements GetPokemon {
  constructor(private readonly getPokemonRepository: GetPokemonRepository) {}

  async get(id: string): Promise<Pokemon> {
    const pokemon = await this.getPokemonRepository.get(id);
    if (!pokemon) {
      return null;
    }

    return pokemon;
  }
}
