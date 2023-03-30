'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Donors', [
        {
          name: 'Alba Maria de Deus',
          birthdate: '19getDonors93-11-13',
          pf: '2.018.419',
          nameMother: 'Maria Aldilene de Deus Morereira Medeiros',
          tipagemABO: 'A',
          tipagemRh: 'Positivo',
          pai: 'Negativo',
          fenotipagemRhK: 'C+ c+ E- e+ K-',
          fenotipagemEstendida: null,
          genotipagem: false,
          observacao: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Donors', null, {});
  }
};
