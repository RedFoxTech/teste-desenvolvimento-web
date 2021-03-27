const PokemonUseCase = require("../../../application/use-cases/pokemon/PokemonUseCase");
const PokemonRepository = require("../../../infra/repositories/postgres/knex/pokemon/PokemonRepository");
const PokemonController = require("../../controllers/pokemon/PokemonController");

const pokemonRepository = new PokemonRepository();
const pokemonUseCase = new PokemonUseCase({ pokemonRepository });
const pokemonController = new PokemonController({ pokemonServices: pokemonUseCase });

module.exports = pokemonController;