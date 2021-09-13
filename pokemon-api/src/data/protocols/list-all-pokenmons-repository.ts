import { Pokemon } from '../../domain/models';

export interface ListAllPokemonsRepository {
  list: () => Promise<Pokemon[]>;
}
