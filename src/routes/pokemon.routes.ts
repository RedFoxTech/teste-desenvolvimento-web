import { Router } from 'express';
import multer from "multer";

import { createPokemonController } from '../modules/pokemons/useCases/createPokemon';
import { importPokemonController } from '../modules/pokemons/useCases/importPokemon';
import { listPokemonsController } from '../modules/pokemons/useCases/listAllPokemons';
import { showPokemonNameController } from '../modules/pokemons/useCases/showPokemonName';
import { showPokemonTypeController } from '../modules/pokemons/useCases/showPokemonType';

const pokemonsRoutes = Router();

const upload = multer({ dest: "./temp" });

pokemonsRoutes.post("/", (request, response) => {
  return createPokemonController.handle(request, response);
});

pokemonsRoutes.get("/", (request, response) => {
  return listPokemonsController.handle(request, response);
});

pokemonsRoutes.get("/:name", (request, response) => {
  return showPokemonNameController.handle(request, response);
});

pokemonsRoutes.get("/type/type", (request, response) => {
  return showPokemonTypeController.handle(request, response);
});

pokemonsRoutes.post("/import", upload.single("file"), (request, response) => {
  return importPokemonController.handle(request, response);
})

export { pokemonsRoutes };