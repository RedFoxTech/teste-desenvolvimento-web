import { ListAllPokemonsRepository } from 'data/protocols';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  success,
} from 'shared/interfaces';

export class ListAllPokemonsController implements Controller {
  constructor(private readonly dbListAllPokemons: ListAllPokemonsRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pokemons = await this.dbListAllPokemons.list();
      return success(pokemons);
    } catch (error) {
      return serverError(error);
    }
  }
}
