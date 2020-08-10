import express from "express";
import { PokemonController } from "../controller/PokemonController";

export const pokemonRouter = express.Router();

const pokemonController = new PokemonController();

pokemonRouter.post("/register", pokemonController.registerPokemon);

pokemonRouter.put("/edit", pokemonController.editPokemon);

pokemonRouter.get("/pokemons", pokemonController.getAllPokemons);

pokemonRouter.delete("/delete", pokemonController.deletePokemon);