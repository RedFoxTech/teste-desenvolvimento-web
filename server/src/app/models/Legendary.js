import Sequelize, { Model } from 'sequelize';

class Legendary extends Model {
    static init(sequelize) {
        super.init(
            {
                legendary: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Legendary;
