const knex = require('knex');

const knexfile = require('../../knexfile');

const connection = knex(knexfile);

module.exports = connection;
