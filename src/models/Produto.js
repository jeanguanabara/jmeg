module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataTypes.String,
        primaryKey: true
        },
       nome: {
        type: DataTypes.STRING,
        allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
      allowNull: false
        },
        valor: {
            type: DataTypes.DOUBLE,
      allowNull: false
        },
       img: {
        type: DataTypes.STRING,
        allowNull: false
        },
        id_marca: {
            type: DataTypes.STRING,
      allowNull: false
        },
        id_processador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_ram: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_tela: {
            type: DataTypes.STRING,
            allowNull: false
        }
        }, {
            tableName: 'produtos',
            timesTamp: false
        

    })

    return Produto;
}

 
/*const db = require('../database/db.json')

const ProdutosModel = {
    FindAll : ()=> {
        let produto     = db.produtos
        let marca       = db.marca
        let processador = db.processador
        let ram         = db.ram
        let tela        = db.tela


        return {produto,marca,processador,ram,tela}
    }
}


module.exports = ProdutosModel*/


