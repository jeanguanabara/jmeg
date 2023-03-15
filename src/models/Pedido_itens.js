const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Pedido_itens = sequelize.define('Pedido_itens',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_pedido: Sequelize.INTEGER,
        id_produto: Sequelize.INTEGER,
        qnt: Sequelize.INTEGER,
        total: Sequelize.DOUBLE
    },
    {
        tablename: 'pedido_itens',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })

module.exports = Pedido_itens