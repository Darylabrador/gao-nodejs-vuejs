const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
});

module.exports = Users;