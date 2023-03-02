const db = require('../database/db.json');

const ProdutoModel = {
    findAll : ()=> {
        let marca = db.marca
        let processador = db.processador
        let ram = db.ram
        let tela = db.tela
        let produtos = db.produtos
        return {marca, processador, ram, tela, produtos}
    },
    findHomeMenorValor : () => {
        let produtos = db.produtos
        console.log(produtos)
          
    }
}

module.exports = ProdutoModel