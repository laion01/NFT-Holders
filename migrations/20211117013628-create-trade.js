'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pairAddress: {
        type: Sequelize.STRING,
      },
      amountIn: {
        type: Sequelize.STRING,
       defaultValue: '0'
      },
      amountOut: {
        type: Sequelize.STRING,
       defaultValue: '0'
      },
      buyPrice: {
        type: Sequelize.STRING,
       defaultValue: 0
      },
      sellPrice: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      sellAmount: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      profitTokenAmount: {
        type: Sequelize.STRING,
       defaultValue: ''
      },
      lossLimit: {
        type: Sequelize.INTEGER,
       defaultValue: 60
      },
      winLimit: {
        type: Sequelize.INTEGER,
       defaultValue: 300
      },
      isFavorite: {
        type: Sequelize.BOOLEAN,
       defaultValue: false
      },
      autoMode: {
        type: Sequelize.BOOLEAN,
       defaultValue: true
      },
      testMode: {
        type: Sequelize.BOOLEAN,
       defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
       defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
       defaultValue: new Date()
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
       defaultValue: false
      },
      isWorking: {
        type: Sequelize.BOOLEAN,
       defaultValue: false
      },
      buyTime: {
        type: Sequelize.DATE,
        defaultValue: '2021-01-01 00:00:00'
      },
      sellTime: {
        type: Sequelize.DATE,
        defaultValue: '2021-01-01 00:00:00'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trades');
  }
};