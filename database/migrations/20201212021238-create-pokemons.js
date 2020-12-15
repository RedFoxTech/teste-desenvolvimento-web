'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable(
      'pokemons', 
      { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        atk: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        def: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        sta: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        statTotal: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        type1: {
          allowNull: false,
          type: Sequelize.STRING
      }
      });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('pokemons');

  }
};
