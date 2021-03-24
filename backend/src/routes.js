import { Router } from "express";
import { index, updatePokemon, deletePokemon, getPokemonData, createPokemon } from "./controllers/pokemons";


const routes = Router();

routes.get("/getPokemons", index);
routes.get("/getData/:id", getPokemonData);
routes.post("/createPokemon", createPokemon);
routes.post("/updatePokemon/:id", updatePokemon);
routes.delete("/deletePokemon/:id", deletePokemon);

export default routes