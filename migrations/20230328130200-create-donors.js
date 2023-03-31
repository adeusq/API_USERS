'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pf: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATEONLY
      },
      nameMother: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      tipagemABO: {
        type: Sequelize.STRING
      },
      tipagemRh: {
        type: Sequelize.STRING
      },
      pai: {
        type: Sequelize.STRING
      },
      iai: {
        type: Sequelize.STRING
      },
      fenotipagemRhK: {
        type: Sequelize.STRING
      },
      fenotipoRaro: {
        type: Sequelize.STRING
      },
      fenotipagemEstendida: {
        type: Sequelize.STRING
      },
      genotipagem: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Donors');
  }
};