import { AddPokemonRepository } from '../protocols/add-pokemon-repository';
import { AddPokemon } from '../../domain/usecases';
import { Pokemon } from '../../domain/models';

export class DbAddPokemon implements AddPokemon {
  constructor(private readonly addPokemonRepository: AddPokemonRepository) {}

  async add(data: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    const newPokemon = await this.addPokemonRepository.add(data);
    if (!newPokemon) {
      return null;
    }

    return newPokemon;
  }
}
