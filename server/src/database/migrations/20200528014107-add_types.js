const types = [
  { type: 'Grass', created_at: new Date(), updated_at: new Date() },
  { type: 'Fire', created_at: new Date(), updated_at: new Date() },
  { type: 'Water', created_at: new Date(), updated_at: new Date() },
  { type: 'Bug', created_at: new Date(), updated_at: new Date() },
  { type: 'Normal', created_at: new Date(), updated_at: new Date() },
  { type: 'Flying', created_at: new Date(), updated_at: new Date() },
  { type: 'Electric', created_at: new Date(), updated_at: new Date() },
  { type: 'Ground', created_at: new Date(), updated_at: new Date() },
  { type: 'Fairy', created_at: new Date(), updated_at: new Date() },
  { type: 'Poison', created_at: new Date(), updated_at: new Date() },
  { type: 'Fighting', created_at: new Date(), updated_at: new Date() },
  { type: 'Psychic', created_at: new Date(), updated_at: new Date() },
  { type: 'Rock', created_at: new Date(), updated_at: new Date() },
  { type: 'Ghost', created_at: new Date(), updated_at: new Date() },
  { type: 'Ice', created_at: new Date(), updated_at: new Date() },
  { type: 'Dragon', created_at: new Date(), updated_at: new Date() },
  { type: 'Steel', created_at: new Date(), updated_at: new Date() },
  { type: 'Dark', created_at: new Date(), updated_at: new Date() },
  { type: 'Dark', created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('types', types)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('types', null, {})
  }
}
