import { EntityRepository, Repository } from "typeorm";
import { Pokemon } from '../entities/Pokemon';

@EntityRepository(Pokemon)
class PokemonRepository extends Repository<Pokemon>{}

export { PokemonRepository }