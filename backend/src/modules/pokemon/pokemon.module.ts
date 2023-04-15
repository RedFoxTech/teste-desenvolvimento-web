import { prisma, router } from "@/main";
import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./pokemon.service";
import { PokemonRepository } from "./repositories/PokemonRepository";

export class PokemonModule {
  instantiate() {
    const repository = new PokemonRepository(prisma);
    const service = new PokemonService(repository);
    const controller = new PokemonController(service);

    router.get("/pokemons", (req, res) => controller.findAllPokemons(req, res));

    router.get("/pokemons/:pokemonId", (req, res) =>
      controller.findOnePokemon(req, res)
    );
  }
}
