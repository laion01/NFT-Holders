'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pair.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    address: DataTypes.STRING,
    inputToken: DataTypes.STRING,
    outputToken: DataTypes.STRING,
    price: DataTypes.STRING,
    initialPrice: DataTypes.STRING,
    initialLiquidity: DataTypes.STRING,
    totalLiquidity: DataTypes.STRING,
    abi: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pair',
  });
  return Pair;
};