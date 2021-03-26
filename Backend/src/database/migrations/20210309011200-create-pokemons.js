module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pokemons', {
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
            pokedex_number: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            generation: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            evolution: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            family_id: {
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
            legendary: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            cp39: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cp40: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            type_1: {
                type: Sequelize.INTEGER,
                references: { model: 'types', key: 'id' },
                onUpdate: 'CASCADE',
                OnDelete: 'SET NULL',
                allowNull: false,
            },
            type_2: {
                type: Sequelize.INTEGER,
                references: { model: 'types', key: 'id' },
                onUpdate: 'CASCADE',
                OnDelete: 'SET NULL',
                allowNull: true,
            },
            weather_1: {
                type: Sequelize.INTEGER,
                references: { model: 'weather', key: 'id' },
                onUpdate: 'CASCADE',
                OnDelete: 'SET NULL',
                allowNull: false,
            },
            weather_2: {
                type: Sequelize.INTEGER,
                references: { model: 'weather', key: 'id' },
                onUpdate: 'CASCADE',
                OnDelete: 'SET NULL',
                allowNull: true,
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

    down: async (queryInterface) => {
        await queryInterface.dropTable('pokemons')
    },
}
