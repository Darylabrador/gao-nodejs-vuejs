/**
 * Database connection
 */
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

module.exports = sequelize;