const { db } = require("../../../../../drivers/database/postgres/knex");

class PokemonRepository {
  getStatTotal(atk, def, stat) {
   const total = (Number(atk) + Number(def)) + Number(stat);
   return total;
  }

  async create({
    userId, name, typeOne, typeTwo, imageName,
    weatherOne, weatherTwo, generation,
    evolutionStage, familyId, atk,
    def, stat, raidable, hatchable,
    evolved, crossGender, lengendary,
    acquirable, spawns, regional, shiny,
    nest, newField, notGettable, futureEvolve
  }) {
    await db('pokemons')
      .insert({
        name, generation,
        atk, def, stat, raidable, hatchable,
        evolved, lengendary, acquirable,
        spawns, regional, shiny, nest,
        evolution_stage: evolutionStage,  
        type_one: typeOne,
        type_two: typeTwo,
        image_name: imageName,
        weather_one: weatherOne, 
        weather_two: weatherTwo, 
        family_id: familyId, 
        stat_total: this.getStatTotal(atk, def, stat),
        cross_gender: crossGender, 
        new: newField, 
        not_gettable: notGettable, 
        future_evolve: futureEvolve,
        user_id: userId
      });
   
    return;
  }

  async updatePokemon({
    pokemonNumber, userId,
    name, typeOne, typeTwo,
    weatherOne, weatherTwo, generation,
    evolutionStage, familyId, atk, 
    def, stat, raidable, hatchable,
    evolved, crossGender, lengendary,
    acquirable, spawns, regional, shiny,
    nest, newField, notGettable, futureEvolve
  }) {
    await db('pokemons')
      .where({ pokemon_number: pokemonNumber, user_id: userId })
      .update({ 
        name, generation,
        atk, def, stat, raidable, hatchable,
        evolved, lengendary, acquirable,
        spawns, regional, shiny, nest,
        evolution_stage: evolutionStage,  
        type_one: typeOne,
        type_two: typeTwo,
        weather_one: weatherOne, 
        weather_two: weatherTwo, 
        family_id: familyId, 
        stat_total: this.getStatTotal(atk, def, stat),
        cross_gender: crossGender, 
        new: newField, 
        not_gettable: notGettable, 
        future_evolve: futureEvolve,
      });
     
    return;
  }

  async dropPokemon({ pokemonNumber, userId }) {
    const row = await db('pokemons')
      .returning('image_name')
      .where({ pokemon_number: pokemonNumber, user_id: userId })
      .del();

    return row[0];
  }

  async dropAllPokemons({ userId }) {
    await db('pokemons')
      .where({ user_id: userId })
      .del();

    return;
  }

  async existsPokemon({ name, userId }) {
    const exists = await db('pokemons')
      .where({ name, user_id: userId })

    return exists.length > 0 ? true : false;
  }

  async existsPokemonById({ pokemonNumber, userId }) {
    const exists = await db('pokemons')
      .where({ pokemon_number: pokemonNumber, user_id: userId });

    return exists.length > 0 ? true : false;
  }

  async getAllPokemons({ userId, page, type, weather, minStatTotal, maxStatTotal, aboveStat }) { 
    const LIMIT_ITEMS = 24;

    let query = db('pokemons')
      .limit(LIMIT_ITEMS)
      .offset((page -1) * LIMIT_ITEMS)
      .orderBy('created_at', 'desc')
      .where({ user_id: userId })

    if (type) {
      query
        .where({ type_one: type })
        .orWhere({ type_two: type })
    }

    if (weather) {
      query
        .where({ weather_one: weather })
        .orWhere({ weather_two: weather })
    }

    if (minStatTotal && maxStatTotal) {
      query
        .where('stat_total', '>=', minStatTotal)
        .andWhere('stat_total', '<=', maxStatTotal)
    }

    if (aboveStat) {
      query
        .where('stat_total', '>=', aboveStat)
    }

    const pokemons = await query;
    let count = 0;

    let queriesParams = [type, weather, maxStatTotal, minStatTotal, aboveStat];
    queriesParams = queriesParams.filter(item => item);

    let withQuery = queriesParams.length >= 1 ? true : false;

    if (!withQuery) {
      const [{ count: result }] = await db('pokemons')
        .count('user_id')
        .where({ user_id: userId });
     
      count = Number(result);
    } else {
      count = pokemons.length;
    }

    const totalPages = count <= LIMIT_ITEMS ? 1 : Math.ceil(count / LIMIT_ITEMS);

    return {
      count,
      totalPages,
      pokemons,
    }
  }

  async getPokemon({ pokemonNumber, userId }) {
    const pokemon = await db('pokemons')
      .where({ pokemon_number: pokemonNumber, user_id: userId });

    return pokemon;
  }

  async getOldPokemonImage({ pokemonNumber, userId }) {
    const [{ image_name }] = await db('pokemons')
      .select('image_name')
      .where({ pokemon_number: pokemonNumber, user_id: userId });

    return image_name;
  }

  async updatePokemonImage({ pokemonNumber, userId, imageName }) {
    await db('pokemons')
      .where({ pokemon_number: pokemonNumber, user_id: userId })
      .update({ image_name: imageName });
    
    return;
  }
}

module.exports = PokemonRepository;