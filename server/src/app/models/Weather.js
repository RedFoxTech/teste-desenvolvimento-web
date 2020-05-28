import Sequelize, { Model } from 'sequelize';

class Weather extends Model {
    static init(sequelize) {
        super.init(
            {
                weather: Sequelize.STRING
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Weather;
