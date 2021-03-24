import { Pokemon } from '../../model/Pokemon';
import { IPokemonsRepository } from '../../repositories/IPokemonRepository';

interface IRequest {
  name: string;
  generation: number;
  evolution_stage: number;
  atk: number;
  def: number;
  type1: string;
  type2: string;
}

class CreatePokemonUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) { }
  execute({ name, generation, evolution_stage, atk, def, type1, type2 }: IRequest): Pokemon {
    const pokemonAlreadyExists = this.pokemonsRepository.findByName(name);

    if (pokemonAlreadyExists) {
      throw new Error("Pokemon already exists!");
    }

    const newPokemon = this.pokemonsRepository.create({ name, generation, evolution_stage, atk, def, type1, type2 });
    return newPokemon;
  }
}

export { CreatePokemonUseCase };