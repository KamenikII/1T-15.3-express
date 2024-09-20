const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('app', 'root', 'yahz', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize