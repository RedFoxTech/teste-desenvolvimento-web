const generations = [
  { generation: 1, created_at: new Date(), updated_at: new Date() },
  { generation: 2, created_at: new Date(), updated_at: new Date() },
  { generation: 3, created_at: new Date(), updated_at: new Date() },
  { generation: 4, created_at: new Date(), updated_at: new Date() },
  { generation: 5, created_at: new Date(), updated_at: new Date() },
  { generation: 6, created_at: new Date(), updated_at: new Date() },
  { generation: 7, created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('generations', generations)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('generations', null, {})
  }
}
