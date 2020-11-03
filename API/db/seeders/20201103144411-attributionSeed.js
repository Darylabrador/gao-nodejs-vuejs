'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    var data = [];
    for (let i = 1; i < 6; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    await queryInterface.bulkInsert('Attributions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attributions', null, {});
  }
};
