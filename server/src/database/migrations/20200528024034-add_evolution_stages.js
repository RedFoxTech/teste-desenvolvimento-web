const evolution_stages = [
  { evolution_stage: '0', created_at: new Date(), updated_at: new Date() },
  { evolution_stage: '1', created_at: new Date(), updated_at: new Date() },
  { evolution_stage: '2', created_at: new Date(), updated_at: new Date() },
  { evolution_stage: '3', created_at: new Date(), updated_at: new Date() },
  { evolution_stage: 'Lower', created_at: new Date(), updated_at: new Date() },
  { evolution_stage: 'Evolved', created_at: new Date(), updated_at: new Date() },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('evolution_stages', evolution_stages)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('evolution_stages', null, {})
  }
}
