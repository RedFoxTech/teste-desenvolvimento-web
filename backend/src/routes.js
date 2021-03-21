import { Router } from "express";
import { updatePokemon, deletePokemon } from "./controllers/pokemons";


const routes = Router();

routes.post("/updatePokemon/:id", updatePokemon);
routes.delete("/deletePokemon/:id", deletePokemon);

export default routes