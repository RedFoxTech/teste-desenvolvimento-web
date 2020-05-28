import Sequelize, { Model } from 'sequelize';

class Aquireable extends Model {
    static init(sequelize) {
        super.init(
            {
                aquireable: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Aquireable;
