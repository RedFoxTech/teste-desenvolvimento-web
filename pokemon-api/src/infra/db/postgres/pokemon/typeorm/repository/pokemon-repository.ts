import {
  AddPokemonRepository,
  ListAllPokemonsRepository,
  GetPokemonRepository,
} from 'data/protocols/';
import { getRepository, Repository } from 'typeorm';
import { Pokemon } from '../entities/Pokemon';

export class PokemonRepository
  implements
    AddPokemonRepository,
    ListAllPokemonsRepository,
    GetPokemonRepository {
  private readonly repostiory: Repository<Pokemon>;
  constructor() {
    this.repostiory = getRepository(Pokemon);
  }

  public async add(data: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    const pokemon = this.repostiory.create(data);
    await this.repostiory.save(pokemon);
    return pokemon;
  }

  public async list(): Promise<Pokemon[]> {
    const pokemons = this.repostiory.find();
    return pokemons;
  }

  public async get(id: string): Promise<Pokemon | null> {
    const pokemon = await this.repostiory.findOne({
      where: {
        id: id,
      },
    });

    return pokemon;
  }
}
