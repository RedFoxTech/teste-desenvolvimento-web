import { Pokemon } from "../../model/Pokemon";
import { IPokemonsRepository, ICreatePokemonDTO } from "../IPokemonRepository";

class PokemonsRepository implements IPokemonsRepository {
  private pokemons: Pokemon[];

  private static INSTANCE: PokemonsRepository;

  private constructor() {
    this.pokemons = [];
  }

  public static getInstance(): PokemonsRepository {
    if (!PokemonsRepository.INSTANCE) {
      PokemonsRepository.INSTANCE = new PokemonsRepository();
    }

    return PokemonsRepository.INSTANCE;
  }

  create({ name, generation, evolution_stage, atk, def, type1, type2 }: ICreatePokemonDTO): Pokemon {
    const pokemon = new Pokemon();

    const newPokemon = Object.assign(pokemon, {
      name,
      generation,
      evolution_stage,
      atk,
      def,
      type1,
      type2,
    });

    this.pokemons.push(pokemon);
    return newPokemon;
  }
  findByName(name: string): Pokemon {
    const pokemon = this.pokemons.find(pokemon => pokemon.name === name);
    return pokemon;
  }
  findByType(type1: string, type2: string): Pokemon[] {
    const foundType = this.pokemons.filter((pokemon) => {
      const foundType2 = this.pokemons.find((pokemon) => pokemon.type2 === type2);
      if (foundType2) {
        return pokemon.type1 === type1 && pokemon.type2 === type2;
      } else {
        return pokemon.type1 === type1;
      }
    });
    return foundType;
  }
  list(): Pokemon[] {
    return this.pokemons;
  }
}

export { PokemonsRepository };