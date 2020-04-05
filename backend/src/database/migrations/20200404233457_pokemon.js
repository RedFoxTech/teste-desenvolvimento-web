
exports.up = function(knex) {
  return knex.schema.createTable('pokemons', function(table) {
      table.increments().primary();
      table.string('name_pokemon').notNullable();
      table.string('id_pokedex').notNullable();
      table.string('element_pokemon').notNullable();
      table.string('secondary_element');
      table.integer('evolution_stage').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemons');
};
