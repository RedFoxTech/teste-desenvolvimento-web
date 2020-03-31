const { readFileSync, unlinkSync, existsSync } = require("fs");
const { initializeDatabase } = require("./sequelize");
const { createType, getTypes, getTypeById, getTypeByName } = require("./helpers/pokemonTypeHelper");
const { createWeather, getWeathers, getWeatherById, getWeatherByName } = require("./helpers/weatherTypeHelper");
const { createPokemon, getPokemons, getPokemonById, getPokemonByName } = require("./helpers/pokemonHelper");

const rawData = readFileSync("../Pokemon Go.csv", "utf8");

const columnNames = [
  "name",
  "pokedexNumber",
  "imageName",
  "generation",
  "evolutionStage",
  "evolved",
  "familyId",
  "crossGen",
  "typeOne",
  "typeTwo",
  "weatherOne",
  "weatherTwo",
  "totalStats",
  "statAtk",
  "statDef",
  "statSta",
  "legendary",
  "aquireable",
  "spawns",
  "regional",
  "raidable",
  "hatchable",
  "shiny",
  "nest",
  "new",
  "notGettable",
  "futureEvolve",
  "totalCombatPowerAtFour",
  "totalCombatPowerAtThree"
];

const getPokemonTypes = (rawData = "") => {
  const dataSet = new Set();
  const lines = rawData.split("\n");
  lines.shift();
  // 9, 10
  for (let line of lines) {
    const columns = line.split(",");
    if (columns[8]) dataSet.add(columns[8]);
    if (columns[9]) dataSet.add(columns[9]);
  }

  return Array.from(dataSet);
};

const getWeatherTypes = (rawData = "") => {
  const dataSet = new Set();
  const lines = rawData.split("\n");
  lines.shift();
  // 11, 12
  for (let line of lines) {
    const columns = line.split(",");
    if (columns[10]) dataSet.add(columns[10]);
    if (columns[11]) dataSet.add(columns[11]);
  }

  return Array.from(dataSet);
};

const populateTypes = async types => {
  for (let type of types) {
    const typeObject = {
      name: type,
      weakAgainstList: [],
      strongAgainstList: []
    };

    try {
      const result = await createType(typeObject)
      console.log(type, result);
    } catch (error) {
      console.log(type, error);
      return false;
    }
  }
  return true;
};

const populateWeathers = async weathers => {
  for (let weather of weathers) {
    const weatherObject = {
      name: weather
    };

    try {
      const result = await createWeather(weatherObject);
      console.log(weather, result);
    } catch (error) {
      console.log(weather, error);
      return false;
    }
  }
  return true;
};

const getPokemonData = async (rawData = "") => {
  console.log("Getting pokemon data...");
  const dataSet = [];
  const lines = rawData.split("\n");
  lines.shift();
  console.log("Total pokemons to be retrieved", lines.length);
  for (let line of lines) {
    const columns = line.split(",");
    const pokemonObject = {};
    for (let index in columns) {
      if (columns[index].length && columns[index].length > 0) {
        // console.log("INDEX", index);
        if (index == 8) {
          const type = await getTypeByName(columns[index]);
          pokemonObject["typeOne"] = type[0].id;
        }

        if (index == 9) {
          const type = await getTypeByName(columns[index]);
          pokemonObject["typeTwo"] = type[0].id;
        }

        if (index == 10) {
          try {
            const weather = await getWeatherByName(columns[index]);
            pokemonObject["weatherOne"] = weather[0].id;
          } catch (error) {
            console.error(error);
          }
        }

        if (index == 11) {
          try {
            const weather = await getWeatherByName(columns[index]);
            pokemonObject["weatherTwo"] = weather[0].id;
          } catch (error) {
            console.error(error);
          }
        }

        if (index < 8 || index > 11) {
          pokemonObject[columnNames[index]] = columns[index];
        }
      }
    }
    dataSet.push(pokemonObject);
  }

  return dataSet;
}

const populate = async () => {
  console.log("Initializing database...");
  await initializeDatabase();
  console.log("Database initialized");

  console.log("Populating pokemon types...");
  const pokemonTypes = getPokemonTypes(rawData);
  await populateTypes(pokemonTypes);
  console.log("Pokemon types populated sucessfully");

  console.log("Populating weather types...");
  const weathers = getWeatherTypes(rawData);
  await populateWeathers(weathers);
  console.log("Weather types populated sucessfully");

  console.log("Populating pokemons...");
  const pokemons = await getPokemonData(rawData);
  for (let pokemon of pokemons) {
    try {
      await createPokemon(pokemon);
    } catch (error) {
      console.log(pokemon.name, error);
    }
  }
  console.log("Pokemons populated sucessfully");
  console.log("Server is now ready to work");
};

if (process.env.RESET) {
  const databaseFilename = "./database.sqlite";
  console.log("Removing old database");
  if (existsSync(databaseFilename))
    unlinkSync(databaseFilename);
  console.log("Old database removed. Now populating a new one.");
}
populate();