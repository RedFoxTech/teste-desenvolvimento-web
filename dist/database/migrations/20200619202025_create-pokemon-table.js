"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = function (knex, Promise) {
    return knex.schema.createTable('pokemons', function (table) {
        table.increments();
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
        table.string('cp_40');
        table.string('cp_39');
    });
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('pokemons');
};
