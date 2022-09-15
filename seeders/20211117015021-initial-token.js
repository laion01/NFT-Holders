'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tokens', [{
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 18,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      icon: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 18,
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      icon: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Wrapped ETH',
      symbol: 'WETH',
      decimals: 18,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      icon: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
