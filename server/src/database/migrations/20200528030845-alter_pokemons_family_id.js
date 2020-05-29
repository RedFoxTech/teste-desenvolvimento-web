module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('pokemons', 'family_id', {
      type: Sequelize.INTEGER,
      references: { model: 'families', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    })
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('pokemons', null, {})
  }
}
