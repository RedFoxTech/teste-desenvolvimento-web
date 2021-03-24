import { PokemonsRepository } from '../../repositories/implementations/PokemonRepository';
import { CreatePokemonController } from './CreatePokemonController';
import { CreatePokemonUseCase } from './CreatePokemonUseCase';


const pokemonsRepository = PokemonsRepository.getInstance();
const createPokemonUseCase = new CreatePokemonUseCase(pokemonsRepository);
const createPokemonController = new CreatePokemonController(createPokemonUseCase);

export { createPokemonController };