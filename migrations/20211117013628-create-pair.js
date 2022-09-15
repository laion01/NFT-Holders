'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      inputToken: {
        type: Sequelize.STRING,
        defaultValue: 1
      },
      outputToken: {
        type: Sequelize.STRING,
        defaultValue: 1
      },
      price: {
        type: Sequelize.STRING,
       defaultValue: 0
      },
      initialPrice: {
        type: Sequelize.STRING,
       defaultValue: 0
      },
      initialLiquidity: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      totalLiquidity: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      abi: {
        type: Sequelize.TEXT,
        defaultValue: '[]'
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
    await queryInterface.dropTable('Pairs');
  }
};