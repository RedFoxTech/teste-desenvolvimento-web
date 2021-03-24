import { Pokemon } from '../../model/Pokemon';
import { IPokemonsRepository } from '../../repositories/IPokemonRepository';

class ListPokemonsUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) { }
  execute(): Pokemon[] {
    const pokemons = this.pokemonsRepository.list();

    return pokemons;
  }
}

export { ListPokemonsUseCase };