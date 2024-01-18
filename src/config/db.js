require('dotenv').config();
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    dialect: process.env.DB_DATABSE,
    host: process.env.DB_HOST
}
)

module.exports = sequelize