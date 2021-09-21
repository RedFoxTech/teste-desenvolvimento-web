import { Pokemon } from 'domain/models';

export interface UpdatePokemon {
  update: (data: Pokemon) => Promise<Pokemon>;
}
