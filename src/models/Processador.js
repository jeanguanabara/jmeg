const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Processador = sequelize.define('Processador', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        processador: Sequelize.STRING
    },
    {
        tableName: 'processador',
        timestamps: false
    }
    )
module.exports = Processador