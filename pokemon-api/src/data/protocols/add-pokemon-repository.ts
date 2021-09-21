import { Pokemon } from '../../domain/models';

export interface AddPokemonRepository {
  add: (data: Omit<Pokemon, 'id'>) => Promise<Pokemon>;
}
