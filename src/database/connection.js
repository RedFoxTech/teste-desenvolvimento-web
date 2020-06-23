const knex = require('knex');
require('dotenv').config();

const config = require('../../knexfile');


let connection;
if(process.env.NODE_ENV === 'development') {
  connection = knex(config.development);
}else {
  connection = knex(config.production);
}

module.exports = connection
