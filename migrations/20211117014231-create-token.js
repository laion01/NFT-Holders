'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      decimals: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING,
       defaultValue: ''
      },
      owner: {
        type: Sequelize.STRING
      },
      abi: {
        type: Sequelize.TEXT,
        defaultValue: '[]'
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tokens');
  }
};