const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Attribution = sequelize.define('Attribution', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Attribution;