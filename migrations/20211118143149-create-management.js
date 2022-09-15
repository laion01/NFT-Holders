'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Management', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mode: {
        type: Sequelize.INTEGER
      },
      contractLimit: {
        type: Sequelize.INTEGER,
       defaultValue: 5
      },
      initialAmountOut: {
        type: Sequelize.FLOAT,
       defaultValue: 0.1
      },
      amountOut: {
        type: Sequelize.FLOAT,
       defaultValue: 0
      },
      profit: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Management');
  }
};