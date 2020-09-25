import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbPokemon', table => {
    table.increments('idPokemon').primary();

    // references
    table.integer('idGeneration')
      .notNullable()
      .references('idGeneration')
      .inTable('tbGeneration')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('idFamily')
      .notNullable()
      .references('idFamily')
      .inTable('tbFamily')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('idEvolutionPokemon')
      .notNullable()
      .references('idEvolutionPokemon')
      .inTable('tbEvolutionPokemon')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    // atributos
    table.string('nomePokemon').notNullable();
    table.integer('numberPokedexPokemon').notNullable();
    table.string('imgNamePokemon').notNullable();
    table.integer('atkPokemon').notNullable();
    table.integer('defPokemon').notNullable();
    table.integer('staPokemon').notNullable();
    table.integer('cp40Pokemon').notNullable();
    table.integer('cp39Pokemon').notNullable();

    // booleans
    table.integer('evolvedPokemon').notNullable();
    table.integer('crossGenPokemon').notNullable();
    table.integer('legendaryPokemon').notNullable();
    table.integer('aquireablePokemon').notNullable();
    table.integer('spawnsPokemon').notNullable();
    table.integer('regionalPokemon').notNullable();
    table.integer('shinyPokemon').notNullable();
    table.integer('nestPokemon').notNullable();
    table.integer('newPokemon').notNullable();
    table.integer('notGettablePokemon').notNullable();
    table.integer('futureEvolvePokemon').notNullable();

    // pseudo boolean
    table.integer('raidablePokemon').notNullable();
    table.integer('hatchablePokemon').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbPokemon');
}