import { UpdatePokemonRepository } from 'data/protocols/save-pokemon-repository';
import { Pokemon } from 'domain/models';
import { UpdatePokemon } from 'domain/usecases';

export class DbUpdatePokemon implements UpdatePokemon {
  constructor(
    private readonly savePokkemonRepository: UpdatePokemonRepository,
  ) {}

  async update(pokemonToUpdate: Pokemon): Promise<Pokemon> {
    const pokemon = this.savePokkemonRepository.update(pokemonToUpdate);

    return pokemon;
  }
}
