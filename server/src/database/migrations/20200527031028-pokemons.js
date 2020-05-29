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
        unique: true,
      },
      pokedex_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      img_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      generation_id: {
        type: Sequelize.INTEGER,
        references: { model: 'generations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      evolution_stage_id: {
        type: Sequelize.INTEGER,
        references: { model: 'evolution_stages', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      evolved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      family_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cross_gen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      type_id_1: {
        type: Sequelize.INTEGER,
        references: { model: 'types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      type_id_2: {
        type: Sequelize.INTEGER,
        references: { model: 'types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      weather_id_1: {
        type: Sequelize.INTEGER,
        references: { model: 'weather', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      weather_id_2: {
        type: Sequelize.INTEGER,
        references: { model: 'weather', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
        references: { model: 'legendaries', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      aquireable_id: {
        type: Sequelize.INTEGER,
        references: { model: 'aquireables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
        references: { model: 'raidables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      hatchable_id: {
        type: Sequelize.INTEGER,
        references: { model: 'hatchables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
      hundred_percent_cp_40: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hundred_percent_cp_39: {
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
    return queryInterface.dropTable('families')
  }
}
