'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn('Clientes', 'sobrenome', {
      type: Sequelize.DataTypes.STRING,
      after: "nome"      
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Clientes', 'sobrenome')
  }
};
