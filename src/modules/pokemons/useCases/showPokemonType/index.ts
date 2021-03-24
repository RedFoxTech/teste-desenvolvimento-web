import { PokemonsRepository } from "../../repositories/implementations/PokemonRepository";
import { ShowPokemonTypeController } from "./ShowPokemonTypeController";
import { ShowPokemonTypeUseCase } from "./ShowPokemonTypeUseCase";

const pokemonsRepository = PokemonsRepository.getInstance();
const showPokemonTypeUseCase = new ShowPokemonTypeUseCase(pokemonsRepository);
const showPokemonTypeController = new ShowPokemonTypeController(showPokemonTypeUseCase);

export { showPokemonTypeController };