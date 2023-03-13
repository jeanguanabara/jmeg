const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Pedido_item = sequelize.define('Pedido_item',{
        id_pedido: Sequelize.INTEGER,
        id_produto: Sequelize.INTEGER,
        qnt: Sequelize.INTEGER,
        total: Sequelize.DOUBLE
    },
    {
        tablename: 'pedido_item',
        timestamps: false
    })

module.exports = Pedido_item