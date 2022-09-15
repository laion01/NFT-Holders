'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Management extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Management.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    mode: DataTypes.INTEGER,
    contractLimit: DataTypes.INTEGER,
    initialAmountOut: DataTypes.FLOAT,
    amoutOut: DataTypes.FLOAT,
    profit: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Management',
  });
  return Management;
};