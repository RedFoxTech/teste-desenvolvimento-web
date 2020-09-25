import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbWeather', table => {
    table.increments('idWeather').primary();
    table.string('nomeWeather').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbWeather');
}