import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multerConfig";

import {
  getPokemons,
  getPokemonByName,
  createPokemon,
  deletePokemon,
} from "../app/controllers/PokemonController";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/pokemons", getPokemons);

routes.get("/pokemons/:name", getPokemonByName);

routes.post("/pokemons", upload.single("avatar"), createPokemon);

routes.delete("/pokemons/:id", deletePokemon);

export default routes;
