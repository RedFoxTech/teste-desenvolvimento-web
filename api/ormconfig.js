const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ['dist/shared/database/entities/*.js'],
  migrations: ['dist/shared/database/migrations/*.js'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/shared/database/entities',
    migrationsDir: 'src/shared/database/migrations',
  },
};
