module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pokedex_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      generation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      evolution_stage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      evolved: {
        type: Sequelize.STRING,
        allowNull: false
      },
      family_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weather1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weather2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stat_total: {
        type: Sequelize.STRING,
        allowNull: false
      },
      atk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sta: {
        type: Sequelize.STRING,
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
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('pokemons');
  }
};
