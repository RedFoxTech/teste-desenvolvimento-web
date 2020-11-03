const connection = require('./connection');

module.exports = async (id) => {
  try {
    const db = await connection();
    const results = await db
      .getTable('stats')
      .select(['stats_id', 'pokemon_id', 'stat_total', 'atk', 'def', 'sta', 'cp_40', 'cp_39'])
      .where('pokemon_id = :id')
      .bind('id', id)
      .execute();

    const listing = await results.fetchAll();
    const list = await listing.map(
      ([statsId, pokemonId, statTotal, atk, def, sta, cp40, cp39]) => ({
        statsId,
        pokemonId,
        statTotal,
        atk,
        def,
        sta,
        cp40,
        cp39,
      }),
    );

    return list;
  } catch (err) {
    console.error('getStatsByIdModel', err.message);
  }
};
