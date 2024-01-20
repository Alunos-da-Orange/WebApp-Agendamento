const Sequelize = require('sequelize')
const database = require('../config/db')

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING(12),
        allowNull: false
    }
})

module.exports = Cliente
