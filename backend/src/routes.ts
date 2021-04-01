import { Router } from "express";
import {
  getPokemons,
  getPokemonByName,
  createPokemon,
} from "../app/controllers/PokemonController";

const routes = Router();

routes.get("/pokemons", getPokemons);

routes.get("/pokemons/:name", getPokemonByName);

routes.post("/pokemons", createPokemon);

export default routes;
