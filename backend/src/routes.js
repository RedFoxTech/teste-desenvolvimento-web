import { Router } from "express";
import { index, updatePokemon, deletePokemon } from "./controllers/pokemons";


const routes = Router();

routes.get("/getPokemons", index);
routes.post("/updatePokemon/:id", updatePokemon);
routes.delete("/deletePokemon/:id", deletePokemon);

export default routes