const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Usuarios = sequelize.define('Usuarios',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: Sequelize.STRING,
        senha: Sequelize.STRING
    },
    {
        tablename:'usuarios',
        timestamps: false
    })

    module.exports = Usuarios