import { Pokemon } from "../model/Pokemon";

interface ICreatePokemonDTO {
  name: string;
  generation: number;
  evolution_stage: number;
  atk: number;
  def: number;
  type1: string;
  type2: string;
}

interface IPokemonsRepository {
  create({ name, generation, evolution_stage, atk, def, type1, type2 }: ICreatePokemonDTO): Pokemon;
  findByName(name: string): Pokemon | undefined;
  findByType(type1: string, type2: string): Pokemon[] | undefined;
  list(): Pokemon[];
}

export { IPokemonsRepository, ICreatePokemonDTO }