'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donors.init({
    pf: DataTypes.STRING,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    nameMother: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    tipagemABO: DataTypes.STRING,
    tipagemRh: DataTypes.STRING,
    pai: DataTypes.STRING,
    iai: DataTypes.STRING,
    fenotipagemRhK: DataTypes.STRING,
    fenotipoRaro: DataTypes.STRING,
    fenotipagemEstendida: DataTypes.STRING,
    genotipagem: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Donors',
  });
  return Donors;
};