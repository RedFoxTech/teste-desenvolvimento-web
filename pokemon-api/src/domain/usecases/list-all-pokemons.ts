import { Pokemon } from '../models';

export interface ListAllPokemons {
  list: () => Promise<Pokemon[]>;
}
