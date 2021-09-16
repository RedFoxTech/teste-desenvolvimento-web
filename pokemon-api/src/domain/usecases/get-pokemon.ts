import { Pokemon } from 'domain/models';

export interface GetPokemon {
  get: (id: string) => Promise<Pokemon | null>;
}
