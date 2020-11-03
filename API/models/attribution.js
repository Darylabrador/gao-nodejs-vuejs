const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Attribution = sequelize.define('Attributions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hours: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Attribution;