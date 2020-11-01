const connection = require('./connection');

module.exports = async (id) => {
  try {
    const db = await connection();
    const results = await db
      .getTable('generations')
      .select([
        'family_id',
        'pokemon_id',
        'evolution_stage',
        'envolved',
        'future_evolve',
        'cross_gen',
      ])
      .where('pokemon_id = :id')
      .bind('id', id)
      .execute();

    const listing = await results.fetchAll();
    const list = await listing.map(
      ([familyId, pokemonId, evolutionStage, envolved, futureEvolve, crossGen]) => ({
        familyId,
        pokemonId,
        evolutionStage,
        envolved,
        futureEvolve,
        crossGen,
      }),
    );

    return list;
  } catch (err) {
    console.error('getGenerationsByIdModel', err.message);
  }
};
