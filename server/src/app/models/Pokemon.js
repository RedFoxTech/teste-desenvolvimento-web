import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                img_name: Sequelize.STRING,
                evolved: Sequelize.BOOLEAN,
                family_id: Sequelize.INTEGER,
                cross_gen: Sequelize.BOOLEAN,
                stat_total: Sequelize.INTEGER,

                atk: Sequelize.INTEGER,
                def: Sequelize.INTEGER,
                sta: Sequelize.INTEGER,
                spawns: Sequelize.BOOLEAN,
                regional: Sequelize.BOOLEAN,
                shiny: Sequelize.BOOLEAN,
                nest: Sequelize.BOOLEAN,
                new: Sequelize.BOOLEAN,
                not_gettable: Sequelize.BOOLEAN,
                future_evolve: Sequelize.BOOLEAN,
                hundred_percent_cp_40: Sequelize.INTEGER,
                hundred_percent_cp_39: Sequelize.INTEGER,

                // raidable_id: Sequelize.INTEGER,
                // hatchable_id: Sequelize.INTEGER,
                // aquireable_id: Sequelize.INTEGER,
                // legendary_id:  Sequelize.INTEGER,
                // type_id_1: Sequelize.INTEGER,
                // type_id_2: Sequelize.INTEGER,
                // weather_id_1: Sequelize.INTEGER,
                // weather_id_2:  Sequelize.INTEGER,
                // evolution_stage_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasOne(models.Raidable, { foreignKey: 'raidable_id' });
        this.hasOne(models.Hatchable, { foreignKey: 'hatchable_id' });
        this.hasOne(models.Aquireable, { foreignKey: 'aquireable_id' });
        this.hasOne(models.Legendary, { foreignKey: 'legendary_id' });
        this.hasOne(models.Type, { foreignKey: 'type_id_1' });
        this.hasOne(models.Type, { foreignKey: 'type_id_2' });
        this.hasOne(models.Weather, { foreignKey: 'weather_id_1' });
        this.hasOne(models.Weather, { foreignKey: 'weather_id_2' });
        this.hasOne(models.Evolution_stage, { foreignKey: 'evolution_stage_id' });
        this.hasOne(models.Generation, { foreignKey: 'generation_id' });


        // this.belongsToMany(models.Raidable, { through: 'PokemonRaidable',foreignKey: 'raidable_id' });
        // this.belongsToMany(models.Hatchable, { through: 'PokemonHatchable',foreignKey: 'hatchable_id' });
        // this.belongsToMany(models.Aquireable, { through: 'PokemonAquireable', foreignKey: 'aquireable_id' });
        // this.belongsToMany(models.Legendary, { through: 'PokemonLegendary', foreignKey: 'legendary_id' });
        // this.belongsToMany(models.Type, { through: 'PokemonType1', foreignKey: 'type_id_1' });
        // this.belongsToMany(models.Type, { through: 'PokemonType2', foreignKey: 'type_id_2' });
        // this.belongsToMany(models.Weather, { through: 'PokemonWeather1', foreignKey: 'weather_id_1' });
        // this.belongsToMany(models.Weather, { through: 'PokemonWeather2', foreignKey: 'weather_id_2' });
        // this.belongsToMany(models.Evolution_stage, { through: 'PokemonEvolutionStage', foreignKey: 'evolution_stage_id' });
        // this.belongsToMany(models.Generation, { through: 'PokemonGeneration', foreignKey: 'generation_id' });
    }
}

export default Pokemon;
