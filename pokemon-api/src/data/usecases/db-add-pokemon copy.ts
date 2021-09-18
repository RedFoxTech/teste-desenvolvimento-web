import { DeletePokemonRepository } from '../protocols/';
import { DeletePokemon } from '../../domain/usecases';
import { Pokemon } from '../../domain/models';

export class DbDeletePokemon implements DeletePokemon {
  constructor(
    private readonly deleteokemonRepository: DeletePokemonRepository,
  ) {}

  async delete(pokemon: Pokemon): Promise<Pokemon | null> {
    return this.deleteokemonRepository.delete(pokemon);
  }
}
