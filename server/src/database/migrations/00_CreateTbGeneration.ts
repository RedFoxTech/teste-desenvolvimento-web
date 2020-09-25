import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbGeneration', table => {
    table.increments('idGeneration').primary();
    table.integer('numberGeneration').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbGeneration');
}