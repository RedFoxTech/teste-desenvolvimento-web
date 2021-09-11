import { AddPokemonRepository } from 'data/protocols/add-pokemon-repository';
import { getRepository, Repository } from 'typeorm';
import { Pokemon } from '../entities/Pokemon';

export class PokemonRepository implements AddPokemonRepository {
  private readonly repostiory: Repository<Pokemon>;
  constructor() {
    this.repostiory = getRepository(Pokemon);
  }

  public async add(data: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    const pokemon = this.repostiory.create(data);
    await this.repostiory.save(pokemon);
    return pokemon;
  }
}
