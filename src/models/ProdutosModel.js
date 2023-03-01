const db = require('../database/db.json')

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


module.exports = ProdutosModel


