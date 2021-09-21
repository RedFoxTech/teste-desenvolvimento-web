import {
  AddPokemonRepository,
  ListAllPokemonsRepository,
  GetPokemonRepository,
  DeletePokemonRepository,
} from 'data/protocols/';
import { UpdatePokemonRepository } from 'data/protocols/save-pokemon-repository';
import { getRepository, Repository } from 'typeorm';
import { Pokemon } from '../entities/Pokemon';

export class PokemonRepository
  implements
    AddPokemonRepository,
    ListAllPokemonsRepository,
    GetPokemonRepository,
    DeletePokemonRepository,
    UpdatePokemonRepository {
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

  public async delete(pokemon: Pokemon): Promise<Pokemon | null> {
    const { id } = pokemon;
    this.repostiory.delete({ id });

    return pokemon;
  }

  public async update(pokemon: Pokemon): Promise<Pokemon> {
    const saved = await this.repostiory.save(pokemon);

    return saved;
  }
}
