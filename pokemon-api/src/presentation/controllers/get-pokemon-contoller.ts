import { GetPokemon } from 'domain/usecases/get-pokemon';
import { InvalidParamError } from 'shared/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  success,
  forbidden,
} from 'shared/interfaces';

export class GetPokemonController implements Controller {
  constructor(private readonly getPokemon: GetPokemon) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const pokemon = await this.getPokemon.get(id);
      if (!pokemon) {
        return forbidden(
          new InvalidParamError(`Not found content with ${id} id`),
        );
      }

      return success(pokemon);
    } catch (error) {
      return serverError(error);
    }
  }
}
