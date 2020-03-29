const { getModelMap } = require("../sequelize");
const { Op } = require("sequelize");

const createPokemon = pokemon => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.create(pokemon)
      .then(() => resolve({ message: "Pokemon created sucessfully" }))
      .catch(error => reject(error));
  });
};
module.exports.createPokemon = createPokemon;

const getPokemons = () => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.findAll()
      .then(pokemons => resolve(pokemons))
      .catch(error => reject(error));
  });
};
module.exports.getPokemons = getPokemons;

const getPokemonById = id => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.findByPk(id)
      .then(pokemon => resolve(pokemon))
      .catch(error => reject(error));
  });
};
module.exports.getPokemonById = getPokemonById;

const getPokemonByName = name => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.findAll({
      where: { name: { [Op.like]: `%${name}%` } }
    }).then(pokemon => resolve(pokemon))
    .catch(error => reject(error));
  });
};
module.exports.getPokemonByName = getPokemonByName;

const getPokemonByFilters = filters => {
  return new Promise((resolve, reject) => {
    if (filters.name)
      filters.name = { [Op.like]: `%${filters.name}%` }
    if (filters.imageName)
      filters.imageName = { [Op.like]: `%${filters.imageName}%` }
    getModelMap().pokemon.findAll({
      where: filters
    }).then(pokemon => resolve(pokemon))
    .catch(error => reject(error));
  });
};
module.exports.getPokemonByFilters = getPokemonByFilters;

const updatePokemon = (id, _pokemon) => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.findByPk(id)
      .then(pokemon => {
        for (let prop in _pokemon)
          pokemon[prop] = _pokemon[prop];
        pokemon.save()
          .then(() => resolve({ message: "Pokemon updated sucessfully" }))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};
module.exports.updatePokemon = updatePokemon;

const deletePokemon = id => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.findByPk(id)
      .then(pokemon => {
        pokemon.destroy()
          .then(() => resolve({ message: "Pokemon removed sucessfully" }))
          .catch(error => reject(error));
      });
  });
};
module.exports.deletePokemon = deletePokemon;