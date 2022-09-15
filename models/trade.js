'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trade.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    pairAddress: DataTypes.STRING,
    amountIn: DataTypes.STRING,
    amountOut: DataTypes.STRING,
    buyPrice: DataTypes.STRING,
    sellPrice: DataTypes.STRING,
    sellAmount: DataTypes.STRING,
    profitTokenAmount: DataTypes.STRING,
    lossLimit : DataTypes.INTEGER,
    winLimit : DataTypes.INTEGER,
    autoMode : DataTypes.BOOLEAN,
    testMode : DataTypes.BOOLEAN,
    isFavorite : DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    isAvailable: DataTypes.BOOLEAN,
    isAvailable : DataTypes.BOOLEAN,
    isWorking: DataTypes.BOOLEAN,
    buyTime: DataTypes.DATE,
    sellTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Trade',
  });
  return Trade;
};