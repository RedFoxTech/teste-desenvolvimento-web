import { MissingParamError } from 'shared/errors';
import { Validation } from '../interfaces';

export class RequiredFieldsValidation implements Validation {
  constructor(private readonly fieldNameRequired: string) {}

  validate(data: any): Error {
    if (!data[this.fieldNameRequired]) {
      return new MissingParamError(this.fieldNameRequired);
    }
  }
}
