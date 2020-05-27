module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primearyKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      img_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      generation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      evolution_stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      evolved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      family_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cross_gen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      type_id_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type_id_2: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weather_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weather_2: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      stat_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      atk: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      def: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      legendary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      aquireable_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      spawns: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      regional: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      raidable_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hatchable_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shiny: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      nest: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      new: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      not_gettable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      future_evolve: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      hundred_percent_CP_40: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hundred_percent_CP_39: {
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
    return queryInterface.dropTable('pokemons');
  }
};
