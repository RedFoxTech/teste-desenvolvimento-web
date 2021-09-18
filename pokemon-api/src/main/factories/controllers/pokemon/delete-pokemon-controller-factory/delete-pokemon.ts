import { PokemonRepository } from 'infra/db/postgres/pokemon/typeorm/repository/pokemon-repository';
import { DeletePokemonController } from 'presentation/controllers/delete-pokemon-controller';
import { Controller } from 'shared/interfaces';

export const deletePokemonController = (): Controller => {
  const dbPokemonRepository = new PokemonRepository();

  return new DeletePokemonController(dbPokemonRepository, dbPokemonRepository);
};
