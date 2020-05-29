const legendaries = [
  { legendary: 0, created_at: new Date(), updated_at: new Date() },
  { legendary: 1, created_at: new Date(), updated_at: new Date() },
  { legendary: 2, created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('legendaries', legendaries)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('legendaries', null, {})
  }
}
