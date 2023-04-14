import { Router } from "express";
import {
  createPokemonController,
  listPokemonsController,
  retrievePokemonController,
  updatePokemonController,
  deletePokemonController,
} from "../../controllers";
import { schemaValidation } from "../../middlewares/schema/schemaValidation.middleware";
import { updatePokemonSchema } from "../../schemas/updatePokemon.schema";

const pokemonsRoute = Router();

pokemonsRoute.get("/", listPokemonsController);

pokemonsRoute.post("/", createPokemonController);

pokemonsRoute.get("/:pokemonID", retrievePokemonController);

pokemonsRoute.patch("/:pokemonID", schemaValidation(updatePokemonSchema), updatePokemonController);

pokemonsRoute.delete("/:pokemonID", deletePokemonController);

export default pokemonsRoute;
