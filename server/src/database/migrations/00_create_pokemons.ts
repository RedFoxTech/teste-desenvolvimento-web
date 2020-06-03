import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('pokemons', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('pokedex_number').notNullable();
        table.string('img_name').notNullable();
        table.string('generation').notNullable();
        table.string('evolution_stage').notNullable();
        table.string('evolved').notNullable();
        table.string('family_id').notNullable();
        table.string('cross_gen').notNullable();
        table.string('type_1').notNullable();
        table.string('type_2').notNullable();
        table.string('weather_1').notNullable();
        table.string('weather_2').notNullable();
        table.string('stat_total').notNullable();
        table.string('atk').notNullable();
        table.string('def').notNullable();
        table.string('sta').notNullable();
        table.string('legendary').notNullable();
        table.string('aquireable').notNullable();
        table.string('spawns').notNullable();
        table.string('regional').notNullable();
        table.string('raidable').notNullable();
        table.string('hatchable').notNullable();
        table.string('shiny').notNullable();
        table.string('nest').notNullable();
        table.string('new').notNullable();
        table.string('not_gettable').notNullable();
        table.string('future_evolve').notNullable();
        table.string('hundredcp_at40').notNullable();
        table.string('hundredcp_at39').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pokemons');
}