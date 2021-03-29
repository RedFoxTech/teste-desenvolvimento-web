require('dotenv').config();
const pg = require('pg');

pg.defaults.ssl = {
   rejectUnauthorized: false,
}

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: process.env.MIGRATIONS
    }
  },
   production: {
    client: process.env.DB_CLIENT,
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: process.env.MIGRATIONS
    }
  },
};