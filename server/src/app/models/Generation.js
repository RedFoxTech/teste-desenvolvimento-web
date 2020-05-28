import Sequelize, { Model } from 'sequelize';

class Generation extends Model {
    static init(sequelize) {
        super.init(
            {
                generation: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Generation;
