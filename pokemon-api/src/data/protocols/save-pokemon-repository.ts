import { Pokemon } from 'domain/models';

export interface UpdatePokemonRepository {
  update: (pokemon: Pokemon) => Promise<Pokemon>;
}
