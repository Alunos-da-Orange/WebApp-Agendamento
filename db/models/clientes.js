// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Incluir as bibliotecas
// Criar a constante para receber a MODEL do Sequelize para usar como herança na classe
const { Model } = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {
  // Criar a classe com o nome da tabela herdando a 'Model' importada acima
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  // Criala as colunas que a `Models` pode manipular
  Clientes.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });

  // Retornar a classe `Clientes`
  return Clientes;
};