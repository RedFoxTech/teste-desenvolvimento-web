import Sequelize, { Model } from 'sequelize';

class Hatchable extends Model {
    static init(sequelize) {
        super.init(
            {
                hatchable: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Hatchable;
