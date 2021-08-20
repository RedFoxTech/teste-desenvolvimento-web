import { EntityRepository, Repository } from "typeorm";
import { Pokemom } from '../entities/Pokemom';

@EntityRepository(Pokemom)
class PokemomRepository extends Repository<Pokemom>{}

export { PokemomRepository }