import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('pokemons', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('pokedex_number');
        table.string('img_name');
        table.string('generation');
        table.string('evolution_stage');
        table.string('evolved');
        table.string('family_id');
        table.string('cross_gen');
        table.string('type_1');
        table.string('type_2');
        table.string('weather_1');
        table.string('weather_2');
        table.string('stat_total');
        table.string('atk');
        table.string('def');
        table.string('sta');
        table.string('legendary');
        table.string('aquireable');
        table.string('spawns');
        table.string('regional');
        table.string('raidable');
        table.string('hatchable');
        table.string('shiny');
        table.string('nest');
        table.string('new');
        table.string('not_gettable');
        table.string('future_evolve');
        table.string('hundredcp_at40');
        table.string('hundredcp_at39');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pokemons');
}