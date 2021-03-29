exports.up = function(knex) {
  knex.schema.hasTable('pokemons').then(exists => {
    if (!exists) {
      return knex.schema.createTable('pokemons', table => {
          table.increments('pokemon_number');

          table.string('name').notNullable();
          table.string('type_one');
          table.string('type_two');
          table.string('weather_one');
          table.string('weather_two');
          table.string('image_name');

          table.integer('generation').notNullable();
          table.integer('evolution_stage').notNullable();   
          table.integer('family_id').notNullable();
          table.integer('stat_total').notNullable();
          table.integer('atk').notNullable();
          table.integer('def').notNullable();
          table.integer('stat').notNullable();
          table.integer('raidable').notNullable();
          table.integer('hatchable').notNullable();
        
          table.boolean('evolved').defaultTo(false);
          table.boolean('cross_gender').defaultTo(false);
          table.boolean('lengendary').defaultTo(false);
          table.boolean('acquirable').defaultTo(false);
          table.boolean('spawns').defaultTo(false);
          table.boolean('regional').defaultTo(false);
          table.boolean('shiny').defaultTo(false);
          table.boolean('nest').defaultTo(false);
          table.boolean('new').defaultTo(false);
          table.boolean('not_gettable').defaultTo(false);
          table.boolean('future_evolve').defaultTo(false); 
          
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());

          table.string('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE');
      });
    }
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('pokemons');
};