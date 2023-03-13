const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Tela = sequelize.define('Tela', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tela: Sequelize.STRING
    },
    {
        tableName: 'tela',
        timestamps: false
    }
    )
module.exports = Tela