import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbFamily', table => {
    table.increments('idFamily').primary();
    table.integer('numberFamily').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbFamily');
}