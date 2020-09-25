import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbType', table => {
    table.increments('idType').primary();
    table.string('nomeType').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbTypes');
}