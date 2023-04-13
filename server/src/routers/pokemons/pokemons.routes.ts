import { Router } from "express";
import { createPokemonController } from "../../controllers";

const pokemonsRoute = Router();

pokemonsRoute.get("/", createPokemonController);

export default pokemonsRoute;
