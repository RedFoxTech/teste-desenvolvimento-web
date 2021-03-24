import { PokemonsRepository } from "../../repositories/implementations/PokemonRepository";
import { ImportPokemonController } from "./ImportPokemonController";
import { ImportPokemonUseCase } from "./ImportPokemonUseCase";

const pokemonsRepository = PokemonsRepository.getInstance();
const importPokemonUseCase = new ImportPokemonUseCase(pokemonsRepository);
const importPokemonController = new ImportPokemonController(importPokemonUseCase);


export { importPokemonController };