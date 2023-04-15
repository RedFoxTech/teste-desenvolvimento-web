import * as yup from "yup";

const type1AllowedValues = [
  "grass",
  "fire",
  "water",
  "bug",
  "normal",
  "poison",
  "eletric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon",
  "dark",
  "steel",
  "flying",
];

const type2AllowedValues = [
  "grass",
  "fire",
  "water",
  "bug",
  "normal",
  "poison",
  "eletric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon",
  "dark",
  "steel",
  "flying",
];

const weather1AllowedValues = [
  "Sunny/clear",
  "Rainy",
  "Partly cloud",
  "Cloudy",
  "Windy",
  "Fog",
  "Snow",
];

export const updatePokemonSchema = yup.object().shape({
  imgName: yup.string(),
  generation: yup.string(),
  evolutionStage: yup
    .string()
    .matches(
      /^(1|2|3|Evolved|Lower)/,
      "Invalid value. Allowed values are: '1', '2', '3', 'Evolved' or 'Lower'."
    ),
  evolved: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  familyID: yup.number().integer().typeError("Value must be an integer"),
  crossGen: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  type1: yup
    .string()
    .oneOf(
      type1AllowedValues,
      "Invalid value. Allowed values are: " + type1AllowedValues.join(", ")
    ),
  type2: yup
    .string()
    .oneOf(
      type2AllowedValues,
      "Invalid value. Allowed values are: " + type2AllowedValues.join(", ")
    ),
  weather1: yup
    .string()
    .oneOf(
      weather1AllowedValues,
      "Invalid value. Allowed values are: " + weather1AllowedValues.join(", ")
    ),
  weather2: yup
    .string()
    .oneOf(
      weather1AllowedValues,
      "Invalid value. Allowed values are: " + weather1AllowedValues.join(", ")
    ),
  statTotal: yup.number().integer().typeError("Value must be an integer"),
  atk: yup.number().integer().typeError("Value must be an integer"),
  def: yup.number().integer().typeError("Value must be an integer"),
  sta: yup.number().integer().typeError("Value must be an integer"),
  legendary: yup
    .number()
    .oneOf([0, 1, 2], "Invalid value. Allowed values are: 0, 1, 2.")
    .integer()
    .typeError("Value must be an integer"),
  aquireable: yup
    .number()
    .oneOf([0, 1, 2, 3], "Invalid value. Allowed values are: 0, 1, 2, 3.")
    .integer()
    .typeError("Value must be an integer"),
  spawns: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  regional: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  raidable: yup
    .number()
    .oneOf([0, 1, 2, 3, 4, 5], "Invalid value. Allowed values are: 0, 1, 2, 3, 4, 5.")
    .integer()
    .typeError("Value must be an integer"),
  hatchable: yup
    .number()
    .integer("Value must be an integer")
    .typeError("Value must be an integer")
    .min(0, "Invalid value. Allowed values are in range: 0 to 15.")
    .max(15, "Invalid value. Allowed values are in range: 0 to 15."),
  shiny: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  nest: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  new: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  notGettable: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  futureEvolve: yup
    .number()
    .oneOf([0, 1], "Invalid value. Allowed values are: 0, 1.")
    .integer()
    .typeError("Value must be an integer"),
  cp40: yup.number().integer().typeError("Value must be an integer"),
  cp39: yup.number().integer().typeError("Value must be an integer"),
});
