import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badRequest,
  success,
} from 'shared/interfaces';
import { AddPokemon } from 'domain/usecases/';

export class AddNewPokemon implements Controller {
  constructor(
    private readonly addPokemon: AddPokemon,
    private readonly validation: Validation,
  ) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = req;
      const error = this.validation.validate(body);

      if (error) badRequest(error);

      const newPokemon = await this.addPokemon.add(body);

      return success(newPokemon);
    } catch (error) {
      return error;
    }
  }
}
