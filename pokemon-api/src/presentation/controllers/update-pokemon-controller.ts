import { EditPokemonModel } from 'domain/models';
import { GetPokemon, UpdatePokemon } from 'domain/usecases';
import { InvalidParamError } from 'shared/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  success,
  serverError,
  forbidden,
} from 'shared/interfaces';

export class UpdatePokemonController implements Controller {
  constructor(
    private readonly updatePokemon: UpdatePokemon,
    private readonly getById: GetPokemon,
  ) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      const data: EditPokemonModel = req.body;

      const pokemon = await this.getById.get(id);
      if (!pokemon) {
        return forbidden(
          new InvalidParamError(`Not found content with ${id} id`),
        );
      }

      const receivedPokemonProps = Object.keys(data);
      for (const key of receivedPokemonProps) {
        pokemon[key] = data[key];
      }

      const updated = await this.updatePokemon.update(pokemon);

      return success(updated);
    } catch (error) {
      serverError(error);
    }
  }
}
