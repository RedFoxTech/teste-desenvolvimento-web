import { PokemonsRepository } from "../../repositories/implementations/PokemonRepository";
import { ShowPokemonNameController } from "./ShowPokemonNameController";
import { ShowPokemonNameUseCase } from "./ShowPokemonNameUseCase";

const pokemonsRepository = PokemonsRepository.getInstance();
const showPokemonNameUseCase = new ShowPokemonNameUseCase(pokemonsRepository);
const showPokemonNameController = new ShowPokemonNameController(showPokemonNameUseCase);


export { showPokemonNameController };
