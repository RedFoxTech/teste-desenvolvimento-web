const {
  createType,
  getTypes,
  getTypeById,
  getTypeByName,
  updateType,
  deleteType
} = require("./helpers/pokemonTypeHelper");

const {
  createWeather,
  getWeathers,
  getWeatherById,
  getWeatherByName,
  updateWeather,
  deleteWeather
} = require("./helpers/weatherTypeHelper");

const {
  createPokemon,
  getPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonByFilters,
  getPokemonCount,
  updatePokemon,
  deletePokemon
} = require("./helpers/pokemonHelper");

module.exports.defineRoutes = app => {

  // Pokemon routes
  app.post("/pokemon", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const newPokemon = req.body;
    createPokemon(newPokemon)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/pokemons", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const offset = req.query.offset;
    const limit = req.query.limit;
    getPokemons(offset, limit)
      .then(pokemons => res.send(pokemons))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });
  
  app.get("/pokemon/id/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    getPokemonById(id)
      .then(pokemon => res.send(pokemon))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/pokemon/name/:name", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const name = req.params.name;
    getPokemonByName(name)
      .then(pokemon => res.send(pokemon))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });
  
  app.get("/pokemon/filter/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    getPokemonByFilters(req.query)
      .then(pokemon => res.send(pokemon))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/pokemon/count/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    getPokemonCount()
      .then(count => res.send(count))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  })

  app.patch("/pokemon/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    const newPokemon = req.body;
    updatePokemon(id, newPokemon)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.delete("/pokemon/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    deletePokemon(id)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  // Type routes
  app.post("/type", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const newType = req.body;
    createType(newType)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/types", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    getTypes()
      .then(types => res.send(types))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/type/id/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    getTypeById(id)
      .then(type => res.send(type))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/type/name/:name", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const name = req.params.name;
    getTypeByName(name)
      .then(type => res.send(type))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.patch("/type/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    const newType = req.body;
    updateType(id, newType)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.delete("/type/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    deleteType(id)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  // Weather routes
  app.post("/weather", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const newWeather = req.body;
    createWeather(newWeather)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/weathers", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    getWeathers()
      .then(weathers => res.send(weathers))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/weather/id/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    getWeatherById(id)
      .then(weather => res.send(weather))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.get("/weather/name/:name", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const name = req.params.name;
    getWeatherByName(name)
      .then(weather => res.send(weather))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.patch("/weather/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    const newWeather = req.body;
    updateWeather(id, newWeather)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });

  app.delete("/weather/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const id = req.params.id;
    deleteWeather(id)
      .then(result => res.send(JSON.stringify({ status: "OK", message: result })))
      .catch(error => res.send(JSON.stringify({ status: "ERROR", reason: error })));
  });
};