import { Pokemon } from "../../model/Pokemon";
import { IPokemonsRepository } from "../../repositories/IPokemonRepository";

interface IRequest {
  name: string;
}
class ShowPokemonNameUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) { }
  execute({ name }: IRequest): Pokemon {
    const pokemons = this.pokemonsRepository.findByName(name);

    if (!pokemons) {
      throw new Error("Pokemon not found!");
    }

    return pokemons;
  }
}

export { ShowPokemonNameUseCase };