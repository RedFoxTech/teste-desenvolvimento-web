const config = require('./index.js');

module.exports = {
  dialect: 'mariadb',
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
  },
  dialectOptions: {
    'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo'
}
