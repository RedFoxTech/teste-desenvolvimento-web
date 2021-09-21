import { PokemonRepository } from 'infra/db/postgres/pokemon/typeorm/repository/pokemon-repository';
import { ListAllPokemonsController } from 'presentation/controllers/list-all-pokemons-controller';
import { Controller } from 'shared/interfaces';

export const listAllPokemonsFacotry = (): Controller => {
  const dbPokemonRepository = new PokemonRepository();
  return new ListAllPokemonsController(dbPokemonRepository);
};
