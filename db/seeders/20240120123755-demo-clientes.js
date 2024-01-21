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
        sobrenome: 'Alunos',
        email: 'alunos@orange.com',
        contato: '7198542-4286',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Agendamento',
        sobrenome: 'Atendimento',
        email: 'atendimento@agenda.com',
        contato: '7198212-5897',
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
