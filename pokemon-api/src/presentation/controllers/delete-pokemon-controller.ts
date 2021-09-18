import { DeletePokemon, GetPokemon } from 'domain/usecases';
import { InvalidParamError } from 'shared/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  success,
  forbidden,
  serverError,
} from 'shared/interfaces';

export class DeletePokemonController implements Controller {
  constructor(
    private readonly deletePokemon: DeletePokemon,
    private readonly getPokemon: GetPokemon,
  ) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;

      const pokemonToDelete = await this.getPokemon.get(id);
      if (!pokemonToDelete) {
        return forbidden(new InvalidParamError('id'));
      }
      const deletedPokemon = await this.deletePokemon.delete(pokemonToDelete);

      return success(deletedPokemon);
    } catch (error) {
      serverError(error);
    }
  }
}
