module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pokemon',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}