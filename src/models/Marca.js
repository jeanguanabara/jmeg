const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Marca = sequelize.define('Marca', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: Sequelize.STRING
    },
    {
        tableName: 'marca',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }
    )


    module.exports = Marca