var DataHoje = new Date();
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable().unique('email');
        table.string('password').notNullable();
        table.string('created_at').defaultTo(DataHoje);
        table.string('updated_at').defaultTo(DataHoje);
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('users');
}