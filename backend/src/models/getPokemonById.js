const connection = require('./connection');

module.exports = async (pokemonId) => {
  try {
    const db = await connection();
    const results = await db
      .getTable('pokemons')
      .select([
        'id',
        'pokemon_name',
        'pokedex_number',
        'generation',
        'img_name',
        'type_1',
        'type_2',
      ])
      .where('id = :id')
      .bind('id', pokemonId)
      .execute();

    const listing = await results.fetchAll();
    const list = await listing.map(
      ([id, pokemonName, pokedexNumber, generation, imgName, type1, type2]) => ({
        id,
        pokemonName,
        pokedexNumber,
        generation,
        imgName,
        type1,
        type2,
      }),
    )[0];
    return list;
  } catch (err) {
    console.error('getPokemonByIdModel', err.message);
  }
};
