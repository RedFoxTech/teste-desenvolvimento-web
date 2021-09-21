import { Pokemon } from 'domain/models';

export interface DeletePokemon {
  delete: (pokemon: Pokemon) => Promise<Pokemon | null>;
}
