const { getConnection, getModelMap } = require("../sequelize");
const { Op, QueryTypes } = require("sequelize");

const createPokemon = pokemon => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemon.create(pokemon)
      .then(() => resolve({ message: "Pokemon created sucessfully" }))
      .catch(error => reject(error));
  });
};
module.exports.createPokemon = createPokemon;

const getPokemons = (offset = null, limit = null) => {
  return new Promise((resolve, reject) => {
    // const options = {};
    // if (offset && limit) {
    //   options.offset = offset;
    //   options.limit = limit;
    //   options.subQuery = false;
    // }

    let queryStatement =
      "SELECT id,name,pokedexNumber,imageName,generation,evolutionStage,"
      + "evolved,familyId,crossGen,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeOne) as typeOne,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeTwo) as typeTwo,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherOne) as weatherOne,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherTwo) as weatherTwo,"
      + "totalStats,statAtk,statDef,statSta,legendary,aquireable,spawns,regional,"
      + "raidable,hatchable,shiny,nest,new,notGettable,futureEvolve,"
      + "totalCombatPowerAtFour,totalCombatPowerAtThree "
      + "FROM pokemons as pkmn";
    if (offset && limit)
      queryStatement += ` LIMIT ${offset}, ${limit}`;
    
    getConnection().query(queryStatement, { type: QueryTypes.SELECT })
      .then(pokemons => resolve(pokemons))
      .catch(error => reject(error))
    // getModelMap().pokemon.findAll(options)
    //   .then(pokemons => resolve(pokemons))
    //   .catch(error => reject(error));
  });
};
module.exports.getPokemons = getPokemons;

const getPokemonById = id => {
  return new Promise((resolve, reject) => {

    let queryStatement =
      "SELECT id,name,pokedexNumber,imageName,generation,evolutionStage,"
      + "evolved,familyId,crossGen,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeOne) as typeOne,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeTwo) as typeTwo,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherOne) as weatherOne,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherTwo) as weatherTwo,"
      + "totalStats,statAtk,statDef,statSta,legendary,aquireable,spawns,regional,"
      + "raidable,hatchable,shiny,nest,new,notGettable,futureEvolve,"
      + "totalCombatPowerAtFour,totalCombatPowerAtThree "
      + "FROM pokemons as pkmn "
      + "WHERE pkmn.id = " + id;
    getConnection().query(queryStatement, { type: QueryTypes.SELECT })
      .then(pokemons => resolve(pokemons[0]))
      .catch(error => reject(error));
    // getModelMap().pokemon.findByPk(id)
    //   .then(pokemon => resolve(pokemon))
    //   .catch(error => reject(error));
  });
};
module.exports.getPokemonById = getPokemonById;

const getPokemonByName = name => {
  return new Promise((resolve, reject) => {

    let queryStatement =
      "SELECT id,name,pokedexNumber,imageName,generation,evolutionStage,"
      + "evolved,familyId,crossGen,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeOne) as typeOne,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeTwo) as typeTwo,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherOne) as weatherOne,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherTwo) as weatherTwo,"
      + "totalStats,statAtk,statDef,statSta,legendary,aquireable,spawns,regional,"
      + "raidable,hatchable,shiny,nest,new,notGettable,futureEvolve,"
      + "totalCombatPowerAtFour,totalCombatPowerAtThree "
      + "FROM pokemons as pkmn "
      + "WHERE pkmn.name LIKE '%" + name + "%'";
    getConnection().query(queryStatement, { type: QueryTypes.SELECT})
      .then(pokemons => resolve(pokemons))
      .catch(error => reject(error));
    // getModelMap().pokemon.findAll({
    //   where: { name: { [Op.like]: `%${name}%` } }
    // }).then(pokemon => resolve(pokemon))
    // .catch(error => reject(error));
  });
};
module.exports.getPokemonByName = getPokemonByName;

const getPokemonByFilters = filters => {
  return new Promise((resolve, reject) => {
    const filterStatements = [];
    const { name, imageName, ...regularFilters } = filters;
    if (name)
      filterStatements.push(`pkmn.name like '%${name}%'`);
    if (imageName)
      filterStatements.push(`pkmn.imageName like '%${imageName}%'`);
    for (let prop in regularFilters)
      filterStatements.push(`pkmn.${prop} = ${filters[prop]}`);
    const conditionStatement = filterStatements.length > 0 ? " WHERE " + filterStatements.join(" AND ") : null
    
    let queryStatement =
      "WITH rawQuery AS (SELECT * FROM pokemons as pkmn" + conditionStatement + ") "
      + "SELECT id,name,pokedexNumber,imageName,generation,evolutionStage,"
      + "evolved,familyId,crossGen,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeOne) as typeOne,"
      + "(SELECT name FROM pokemonTypes AS ptype WHERE ptype.id = pkmn.typeTwo) as typeTwo,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherOne) as weatherOne,"
      + "(SELECT name FROM weather AS w WHERE w.id = pkmn.weatherTwo) as weatherTwo,"
      + "totalStats,statAtk,statDef,statSta,legendary,aquireable,spawns,regional,"
      + "raidable,hatchable,shiny,nest,new,notGettable,futureEvolve,"
      + "totalCombatPowerAtFour,totalCombatPowerAtThree "
      + "FROM rawQuery as pkmn"
    getConnection().query(queryStatement, { type: QueryTypes.SELECT })
      .then(pokemons => resolve(pokemons))
      .catch(error => reject(error));
  });
};
module.exports.getPokemonByFilters = getPokemonByFilters;

const getPokemonCount = () => {
  return new Promise((resolve, reject) => {
    const queryStatement =
      "SELECT count(id) as count FROM pokemons";
    getConnection().query(queryStatement, { type: QueryTypes.SELECT })
      .then(count => resolve(count[0])["count"])
      .catch(error => reject(error));
  });
};
module.exports.getPokemonCount = getPokemonCount;

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