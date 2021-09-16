import { Pokemon } from '../../domain/models';

export interface GetPokemonRepository {
  get: (id: string) => Promise<Pokemon | null>;
}
