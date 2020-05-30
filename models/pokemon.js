'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define('Pokemon',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pokedex_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        generation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        evolution_stage: {
            type: DataTypes.STRING,
            allowNull: true
        },
        evolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        family_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cross_gen: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        type_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        weather_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weather_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stat_total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        atk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        def: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        legendary: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        acquireable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spawns: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        regional: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        raidable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hatcheable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shiny: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        nest: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        new: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        not_gettable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        future_evolve: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        full_cp_at_40: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        full_cp_at_39: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    return Pokemon
};