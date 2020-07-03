'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      pokedex_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      img_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      generation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      evolution_stage: {
        type: Sequelize.STRING
      },
      evolved: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      family_id: {
        type: Sequelize.INTEGER
      },
      cross_gen: {
        type: Sequelize.BOOLEAN
      },
      type1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type2: {
        type: Sequelize.STRING
      },
      weather1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weather2: {
        type: Sequelize.STRING
      },
      stat_total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      atk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      def: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sta: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      legendary: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      aquireable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      spawns: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      regional: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      raidable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hatchable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shiny: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      nest: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      new: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      not_gettable: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      future_evolve: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      cp_100_lvl40: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cp_100_lvl39: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pokemons')
  }
}
