import express from 'express';
import { PokemonsController } from '../controllers/PokemonsController';

export const pokemonsRoutes = express.Router();
const pokemonsController = new PokemonsController();

pokemonsRoutes.post("/", async (req, res) => {
  await pokemonsController.createPokemon(req, res)
})

pokemonsRoutes.get("/", async (req, res) => {
  await pokemonsController.getPokemonsByUser(req, res)
})

pokemonsRoutes.get("/:id", async (req, res) => {
  await pokemonsController.getPokemonsById(req, res)
})

pokemonsRoutes.put("/:id", async (req, res) => {
  await pokemonsController.updatePokemon(req, res)
})

pokemonsRoutes.delete("/", async (req, res) => {
  await pokemonsController.deletePokemons(req, res)
})
