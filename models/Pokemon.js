module.exports = (sequelize, DataTypes) => {
    const pokemon = sequelize.define(
        'Pokemon',
        {
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            atk: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            def: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            sta: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            statTotal: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            type1: {
                allowNull: false,
                type: DataTypes.STRING
            }            
        },
        {
            tableName: "pokemons",
            timestamps: false
        }

        
    );

    return pokemon;

}
