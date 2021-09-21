import { PokemonRepository } from 'infra/db/postgres/pokemon/typeorm/repository/pokemon-repository';
import { AddNewPokemon } from 'presentation/controllers/add-new-pokemon-controller';
import { Controller } from 'shared/interfaces';
import { addNewPokemonValidation } from './validation';

export const addPokemonController = (): Controller => {
  const dbPokemonRepository = new PokemonRepository();

  return new AddNewPokemon(dbPokemonRepository, addNewPokemonValidation());
};
