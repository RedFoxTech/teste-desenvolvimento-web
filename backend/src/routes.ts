import { Router } from "express";
import {
  getPokemons,
  getPokemonByName,
  createPokemon,
  deletePokemon,
} from "../app/controllers/PokemonController";

const routes = Router();

routes.get("/pokemons", getPokemons);

routes.get("/pokemons/:name", getPokemonByName);

routes.post("/pokemons", createPokemon);

routes.delete("/pokemons/:id", deletePokemon);

export default routes;
