import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbEvolutionPokemon', table => {
    table.increments('idEvolutionPokemon').primary();
    table.string('stageEvolutionPokemon').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbEvolutionPokemon');
}