import Sequelize, { Model } from 'sequelize';

class Evolution_stage extends Model {
    static init(sequelize) {
        super.init(
            {
                evolution_stage: Sequelize.STRING
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Evolution_stage;
