const raidables = [
  { raidable: 1, created_at: new Date(), updated_at: new Date() },
  { raidable: 2, created_at: new Date(), updated_at: new Date() },
  { raidable: 3, created_at: new Date(), updated_at: new Date() },
  { raidable: 4, created_at: new Date(), updated_at: new Date() },
  { raidable: 5, created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('raidables', raidables)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('raidables', null, {})
  }
}
