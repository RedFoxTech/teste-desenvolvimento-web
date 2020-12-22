const { Router } = require("express");
const PokemonController = require("./controllers/PokemonController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/pokemons", PokemonController.index);
routes.post("/pokemons", PokemonController.store);
routes.get("/search", SearchController.index);
routes.delete("/pokemons/:id", PokemonController.destroy);
routes.put("/pokemons", PokemonController.update);

module.exports = routes;
