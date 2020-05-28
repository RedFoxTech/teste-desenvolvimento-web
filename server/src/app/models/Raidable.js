import Sequelize, { Model } from 'sequelize';

class Raidable extends Model {
    static init(sequelize) {
        super.init(
            {
                raidable: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Raidable;
