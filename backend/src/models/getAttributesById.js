const connection = require('./connection');

module.exports = async (id) => {
  try {
    const db = await connection();
    const results = await db
      .getTable('attributes')
      .select([
        'attributes_id',
        'pokemon_id',
        'weather_1',
        'weather_2',
        'legendary',
        'not_gettable',
        'aquireable',
        'spawns',
        'regional',
        'raidable',
        'hatchable',
        'shiny',
        'nest',
        'new_pokemon',
      ])
      .where('pokemon_id = :id')
      .bind('id', id)
      .execute();

    const listing = await results.fetchAll();
    const list = await listing.map(
      ([
        attributesId,
        pokemonId,
        weather1,
        weather2,
        legendary,
        notGettable,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        newPokemon,
      ]) => ({
        attributesId,
        pokemonId,
        weather1,
        weather2,
        legendary,
        notGettable,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        newPokemon,
      }),
    );

    return list;
  } catch (err) {
    console.error('getAttributesByIdModel', err.message);
  }
};
