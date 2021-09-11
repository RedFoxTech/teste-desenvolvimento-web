import { Validation } from 'shared/interfaces';
import { ValidationComposite } from 'shared/validators/composite';
import { RequiredFieldsValidation } from 'shared/validators/required-fields-validation';

export const addNewPokemonValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['name']) {
    validations.push(new RequiredFieldsValidation(field));
  }

  return new ValidationComposite(validations);
};
