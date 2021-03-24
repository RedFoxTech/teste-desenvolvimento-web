import { Pokemon } from "../../model/Pokemon";
import { IPokemonsRepository } from "../../repositories/IPokemonRepository";

interface IRequest {
  type1: string;
  type2: string;
}

class ShowPokemonTypeUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) { }
  execute({ type1, type2 }: IRequest): Pokemon[] {
    const pokemons = this.pokemonsRepository.findByType(type1, type2);

    if (!pokemons) {
      throw new Error("Pokemon not Found");
    }

    return pokemons;
  }
}

export {ShowPokemonTypeUseCase};