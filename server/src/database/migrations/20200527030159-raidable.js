module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('raidables', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primearyKey: true,
        unique: true,
      },
      raidable: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('raidables')
  }
}
