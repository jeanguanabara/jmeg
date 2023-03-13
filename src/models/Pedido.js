const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Pedido = sequelize.define('Pedido',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente: Sequelize.INTEGER,
        total: Sequelize.DOUBLE
    },
    {
        tableName: 'pedido',
        timestamps: false
    }
    )
    
    module.exports = Pedido
