exports.up = function (knex) {
    return knex.schema.createTable('pokemons', table => {
        table.increments('id');
        table.string('Name').notNullable().unique('name');
        table.string('Pokedex_Number').notNullable();
        table.integer('Generation');
        table.integer('Evolution_Stage');
        table.string('Evolved');
        table.integer('FamilyID');
        table.string('type_1').notNullable();
        table.string('type_2');
        table.string('weather_1');
        table.string('weather_2');
        table.integer('STAT_TOTAL');
        table.integer('ATK').notNullable();
        table.integer('DEF').notNullable();
        table.integer('STA').notNullable();
        table.integer('Legendary').defaultTo(0);
        table.integer('CP_MAX').notNullable();
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('pokemons');
}