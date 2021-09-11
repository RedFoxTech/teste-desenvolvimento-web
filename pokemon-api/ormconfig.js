module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'pokemon-go-db',
  entities: ['./src/infra/db/postgres/**/typeorm/entities/**'],
  migrations: ['./src/infra/db/typeorm/migrations/**'],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
