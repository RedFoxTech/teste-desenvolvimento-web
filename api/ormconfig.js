console.log('process.env.DATABASE_URL :>>', process.env.DATABASE_URL);

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      process.env.ENTITIES
    ],
    "migrations": [
      process.env.MIGRATIONS
    ],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    },
    "autoSchemaSync": true
}
