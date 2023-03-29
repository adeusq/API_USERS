'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [
        {
          name: 'Alba Maria de Deus',
          birthdate: '1993-11-13',
          email: 'alba@gmail.com',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Luís Fernando Freire',
          birthdate: '1997-06-03',
          email: 'luis@gmail.com',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Anderson Morais Bandeira',
          birthdate: '1994-08-10',
          email: 'anderson@gmail.com',
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Letimberg Cavalcante',
          birthdate: '1987-03-11',
          email: 'letimberg@gmail.com',
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
