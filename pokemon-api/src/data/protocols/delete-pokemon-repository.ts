import { Pokemon } from '../../domain/models';

export interface DeletePokemonRepository {
  delete: (pokemon: Pokemon) => Promise<Pokemon | null>;
}
