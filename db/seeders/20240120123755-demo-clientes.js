// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
module.exports = {
  // Cadastrar o registro na tabela "Clientes"
  async up (queryInterface) {
    return queryInterface.bulkInsert ('Clientes', [
      {
        nome: 'Web App',
        email: 'alunos@orange.com',
        contato: '7198542-4286',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tebela 'Clientes'
  async down (queryInterface) {
    await queryInterface.bulkDelete ('Clientes', null, {});
  }
};
