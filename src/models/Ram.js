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
        timestamps: false
    }
    )
module.exports = Ram