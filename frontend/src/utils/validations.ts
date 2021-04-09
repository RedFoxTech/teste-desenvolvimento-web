import { PokemonCardProps } from 'components/PokemonCard'
import { PokemonStatsProps } from 'components/PokemonStats'
import Joi from 'joi'

export type FieldsToValidate = Pick<
  PokemonCardProps,
  'name' | 'pokedexNumber' | 'pokemonType' | 'pokemonType2'
> &
  Pick<
    PokemonStatsProps,
    | 'atk'
    | 'cp39'
    | 'cp40'
    | 'generation'
    | 'evolutionStage'
    | 'weather'
    | 'weather2'
    | 'hatchable'
    | 'familyID'
    | 'def'
    | 'sta'
  >

const fieldsValidations = {
  name: Joi.string().required(),
  pokedexNumber: Joi.number().required(),
  pokemonType: Joi.string().required(),
  pokemonType2: Joi.string(),
  weather: Joi.string().required(),
  weather2: Joi.string(),
  generation: Joi.number().required(),
  evolutionStage: Joi.number().required(),
  familyID: Joi.number().required(),
  atk: Joi.number().required(),
  def: Joi.number().required(),
  sta: Joi.number().required(),
  hatchable: Joi.number().required(),
  cp40: Joi.number().required(),
  cp39: Joi.number().required(),
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function addPokemonValidate(values: FieldsToValidate) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
