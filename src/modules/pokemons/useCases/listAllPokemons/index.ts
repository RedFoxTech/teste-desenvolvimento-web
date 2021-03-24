import { PokemonsRepository } from "../../repositories/implementations/PokemonRepository";
import { ListPokemonsController } from "./ListPokemonsController";
import { ListPokemonsUseCase } from "./ListPokemonsUseCase";

const pokemonsRepository = PokemonsRepository.getInstance();
const listPokemonsUseCase = new ListPokemonsUseCase(pokemonsRepository);
const listPokemonsController = new ListPokemonsController(listPokemonsUseCase);

export { listPokemonsController };