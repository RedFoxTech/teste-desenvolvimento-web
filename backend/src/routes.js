import { Router } from "express";
import { index, updatePokemon, deletePokemon, getPokemonData } from "./controllers/pokemons";


const routes = Router();

routes.get("/getPokemons", index);
routes.get("/getData/:id", getPokemonData);
routes.post("/updatePokemon/:id", updatePokemon);
routes.delete("/deletePokemon/:id", deletePokemon);

export default routes