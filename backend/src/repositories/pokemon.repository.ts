import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pokemon, PokemonRelations} from '../models';

export class PokemonRepository extends DefaultCrudRepository<
  Pokemon,
  typeof Pokemon.prototype.id,
  PokemonRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pokemon, dataSource);
  }
}
