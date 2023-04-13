import { Router } from "express";
import {
  createPokemonController,
  listPokemonsController,
} from "../../controllers";

const pokemonsRoute = Router();

pokemonsRoute.get("/", listPokemonsController);

pokemonsRoute.post("/", createPokemonController);

export default pokemonsRoute;
