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
                generation_id: Sequelize.INTEGER,
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

                raidable_id: Sequelize.INTEGER,
                hatchable_id: Sequelize.INTEGER,
                aquireable_id: Sequelize.INTEGER,
                legendary_id:  Sequelize.INTEGER,
                type_id_1: Sequelize.INTEGER,
                type_id_2: Sequelize.INTEGER,
                weather_id_1: Sequelize.INTEGER,
                weather_id_2:  Sequelize.INTEGER,
                evolution_stage_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    // static associate(models) {
    //     this.belongsTo(models.Raidable, { foreignKey: 'raidable_id', as: 'raidable' });
    //     this.belongsTo(models.Hatchable, { foreignKey: 'hatchable_id', as: 'hatchable' });
    //     this.belongsTo(models.Aquireable, { foreignKey: 'aquireable_id', as: 'aquireable' });
    //     this.belongsTo(models.Legendary, { foreignKey: 'legendary_id', as: 'legendary' });
    //     this.belongsTo(models.Type, { foreignKey: 'type_id_1', as: 'type_1' });
    //     this.belongsTo(models.Type, { foreignKey: 'type_id_2', as: 'type_2' });
    //     this.belongsTo(models.Weather, { foreignKey: 'weather_id_1', as: 'weather_1' });
    //     this.belongsTo(models.Weather, { foreignKey: 'weather_id_2', as: 'weather_2' });
    //     this.belongsTo(models.Evolution_stage, { foreignKey: 'evolution_stage_id', as: 'evolution_stage' });
    // }
}

export default Pokemon;
