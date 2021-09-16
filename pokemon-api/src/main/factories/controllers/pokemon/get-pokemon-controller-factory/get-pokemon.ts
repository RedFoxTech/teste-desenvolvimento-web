import { PokemonRepository } from 'infra/db/postgres/pokemon/typeorm/repository/pokemon-repository';
import { GetPokemonController } from 'presentation/controllers/get-pokemon-contoller';
import { Controller } from 'shared/interfaces';

export const getPokemonController = (): Controller => {
  const dbPokemonRepository = new PokemonRepository();

  return new GetPokemonController(dbPokemonRepository);
};
