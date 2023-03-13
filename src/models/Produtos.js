const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')
    const Produtos = sequelize.define('Produtos',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: Sequelize.STRING,
        descricao:Sequelize.TEXT,
        valor: Sequelize.DOUBLE,
        img: Sequelize.STRING,
        id_marca: Sequelize.INTEGER,
        id_processador:Sequelize.INTEGER,
        id_ram: Sequelize.INTEGER,
        id_tela: Sequelize.INTEGER
    },
    {
        tablename: 'produtos',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
module.exports = Produtos