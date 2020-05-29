const hatchables = [
  { hatchable: 0, created_at: new Date(), updated_at: new Date() },
  { hatchable: 2, created_at: new Date(), updated_at: new Date() },
  { hatchable: 5, created_at: new Date(), updated_at: new Date() },
  { hatchable: 10, created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('hatchables', hatchables)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('hatchables', null, {})
  }
}
