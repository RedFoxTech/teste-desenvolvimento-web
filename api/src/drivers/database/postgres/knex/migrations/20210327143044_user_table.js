exports.up = function(knex) {
  knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema.createTable('users', table => {
        table.string('id').notNullable().unique();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
    }
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users');
};
