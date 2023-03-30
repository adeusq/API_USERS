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
    name: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    pf: DataTypes.STRING,
    nameMother: DataTypes.STRING,
    tipagemABO: DataTypes.STRING,
    tipagemRh: DataTypes.STRING,
    pai: DataTypes.STRING,
    fenotipagemRhK: DataTypes.STRING,
    fenotipagemEstendida: DataTypes.STRING,
    genotipagem: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Donors',
  });
  return Donors;
};