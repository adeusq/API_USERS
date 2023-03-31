'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Donors', [
        {
          pf: '892.333',
          name: 'ANA MARIA DE SOUSA FERREIRA',
          birthdate: '1990-07-06',
          nameMother: 'FATIMA PIMENTA SOUSA',
          contact:'(85) 999447825',
	        email: 'anamaria@gmail.com',
          tipagemABO: 'O',
          tipagemRh: 'Positivo',
          pai: 'Negativo',		
	        iai:null,
          fenotipagemRhK: 'c- C+ e+ E- K-',
	        fenotipoRaro: 'Ge(2)-',
          fenotipagemEstendida: 'Di(a)- H+ M+ N+ s+ S+ Ge(2)- P1+ c- C+ e+ E- Lu(a)- Lu(b)+ k+ K- Kp(a)- Kp(b)+ Le(a)- Le(b)+ Fy(a)- Fy(b)+ Jk(a)+ Jk(b)-',
          genotipagem: false,
          observacao: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          pf: '1.982.482',
          name: 'MARIA PEREIRA DA SILVA',
          birthdate: '1998-05-13',
          nameMother: 'MARIA SOCORRO PEREIRA DA SILVA',
	        contact:'(85) 985235985',
	        email: 'mariapereira@gmail.com',
          tipagemABO: 'O',
          tipagemRh: 'Positivo',
          pai: 'Negativo',		
	        iai:null,
          fenotipagemRhK: 'c+ C- e+ E- K-',
	        fenotipoRaro:'Fy(a)- Fy(b)-',
          fenotipagemEstendida: 'Di(a)- H+ M+ N+ s+ S- Ge(2)+ c+ C- e+ E- Lu(b)+ K- Kp(b)+ Fy(a)- Fy(b)- Jk(a)+ Jk(b)+',
          genotipagem: false,
          observacao: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          pf: '1.651.629',
          name: 'VANESSA KELLY DE ARAUJO CARVALHO DA SILVA',
          birthdate: '1995-10-21',
          nameMother: 'MARIA ERINE DE ARAUJO CARVALHO',
	        contact: '(85) 987259610',
	        email: 'vanessacarvalho@gmail.com',
          tipagemABO: 'O',
          tipagemRh: 'Negativo',
          pai: 'Negativo',		
	        iai: null,
          fenotipagemRhK: 'c+ C- e+ E- K-',
	        fenotipoRaro: 'Lu(a)- Lu(b)-',
          fenotipagemEstendida: 'Di(a)- H+ M- N+ s+ S- Ge(2)+ P1+ c+ C- e+ E- Lu(a)- Lu(b)- k+ K- Kp(a)- Kp(b)+ Le(a)- Le(b)+ Fy(a)+ Fy(b)+ Jk(a)- Jk(b)+',
          genotipagem: true,
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
