import { ListAllPokemonsRepository } from 'data/protocols/list-all-pokenmons-repository';
import { Pokemon } from 'domain/models';
import { ListAllPokemons } from 'domain/usecases';

export class DBListAllPokemon implements ListAllPokemons {
  constructor(
    private readonly listPoekmonRepository: ListAllPokemonsRepository,
  ) {}

  async list(): Promise<Pokemon[]> {
    const pokemons = await this.listPoekmonRepository.list();
    return pokemons;
  }
}
