import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badRequest,
  success,
  serverError,
} from 'shared/interfaces';
import { AddPokemon } from 'domain/usecases/';
import { calculateStateTotal } from 'shared/utils/calculateStatTotal';

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

      const data = { ...body };

      const { atk, def, sta } = body;

      const statTotal = calculateStateTotal(atk, def, sta);
      console.log(statTotal);
      data.statTotal = statTotal;

      const newPokemon = await this.addPokemon.add(data);

      return success(newPokemon);
    } catch (error) {
      return serverError(error);
    }
  }
}
