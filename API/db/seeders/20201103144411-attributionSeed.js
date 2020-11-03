'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    var data = [];
    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: new Date(),
        hours: "8",
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: new Date(),
        hours: "10",
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: new Date(),
        hours: "15",
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
