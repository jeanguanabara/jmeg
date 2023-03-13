const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Cliente = sequelize.define('Cliente', {
        id: {
            type:           Sequelize.INTEGER,
            primaryKey:     true,
            autoIncrement:  true
        },
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        id_end: Sequelize.INTEGER 
    },
    {
        tableName: 'cliente',
        timestamps: false
    })

    module.exports = Cliente