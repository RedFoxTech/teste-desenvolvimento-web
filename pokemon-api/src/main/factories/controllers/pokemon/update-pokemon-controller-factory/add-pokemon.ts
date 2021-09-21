import { PokemonRepository } from 'infra/db/postgres/pokemon/typeorm/repository/pokemon-repository';
import { UpdatePokemonController } from 'presentation/controllers/update-pokemon-controller';
import { Controller } from 'shared/interfaces';

export const updatePokemonController = (): Controller => {
  const dbPokemonRepository = new PokemonRepository();

  return new UpdatePokemonController(dbPokemonRepository, dbPokemonRepository);
};
