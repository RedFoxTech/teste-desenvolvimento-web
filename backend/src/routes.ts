import { Router } from "express";
import { getPokemons } from "../app/controllers/PokemonController";

const routes = Router();

routes.get("/pokemons", getPokemons);

export default routes;
