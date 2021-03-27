const environment = process.env.NODE_END || 'development';

const knexfile = require('../../../../../knexfile')[environment];
const db = require('knex')(knexfile);

module.exports = { db };