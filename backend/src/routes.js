import { Router } from "express";
import { updatePokemon } from "./controllers/pokemons";


const routes = Router();

routes.post("/updatePokemon/:id", updatePokemon);

export default routes