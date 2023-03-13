const Sequelize = require('sequelize')

const sequelize = require('../config/jmeg')


    const Endereco = sequelize.define('Endereco',{

    
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep: {
        type: Sequelize.STRING
    },
    logradouro: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.STRING
    },
    complemento: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    uf: {
        type: Sequelize.STRING
    }
    },
    {
        tableName: 'endereco',
        timestamp:false,
        createdAt: false,
        updatedAt: false
    }

    )

module.exports = Endereco