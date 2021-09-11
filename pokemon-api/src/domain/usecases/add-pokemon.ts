import { Pokemon } from '../models';

export interface AddPokemon {
  add: (requestData: Omit<Pokemon, 'id'>) => Promise<Pokemon>;
}
