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
        

        function valorMenor(a,b){
            
            return (a.valor-b.valor)
        }
        
        let itensMenorValor = produtos.sort(valorMenor)
        
       

        
       
        return itensMenorValor.slice(0,3)

          
    },
    findHomeMaisRecentes: () => {
        let produtos = db.produtos

        
        function valorMenor(a,b){
            
            return (b.id - a.id)
        }


        itensMenorValor = produtos.sort(valorMenor)
        
        return itensMenorValor.slice(0,3)
    }
}

module.exports = ProdutoModel