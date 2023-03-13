const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Ram = sequelize.define('Ram', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ram: Sequelize.STRING
    },
    {
        tableName: 'ram',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }
    )
module.exports = Ram