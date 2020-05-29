const aquireables = [
  { aquireable: 0, created_at: new Date(), updated_at: new Date() },
  { aquireable: 1, created_at: new Date(), updated_at: new Date() },
  { aquireable: 2, created_at: new Date(), updated_at: new Date() },
  { aquireable: 3, created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('aquireables', aquireables)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('aquireables', null, {})
  }
}
