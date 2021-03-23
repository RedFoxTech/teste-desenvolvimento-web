'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      family_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      atk:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      def:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sta:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sta_total:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      evolution_stage:{
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
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pokemons')
  }
};
