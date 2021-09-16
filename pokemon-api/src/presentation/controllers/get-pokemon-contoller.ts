import { GetPokemon } from 'domain/usecases/get-pokemon';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  success,
} from 'shared/interfaces';

export class GetPokemonController implements Controller {
  constructor(private readonly getPokemon: GetPokemon) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const pokemon = await this.getPokemon.get(id);

      return success(pokemon);
    } catch (error) {
      return serverError(error);
    }
  }
}
