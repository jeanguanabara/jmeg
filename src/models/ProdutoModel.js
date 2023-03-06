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
    findAllProdutos: ()=> {
        return db.produtos
    }
    ,
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
    },
    findbyID: (id)=> {


        let produto = db.produtos.find(elemento => elemento.id == id)
        
        console.log(produto)
        return produto


    },
    findComplementos: () => {
        let marca = db.marca
        let processador = db.processador
        let ram = db.ram
        let tela = db.tela
        return {marca, processador, ram, tela}
    },
    findByBome: (nome) => {
        let produtos = db.produtos

        let resultadoPesquisa = []

        for (let i in produtos){
            let consultaItem = produtos[i].nome.toLowerCase()
            if (consultaItem.includes(nome)){
                resultadoPesquisa.push(produtos[i])
            }
        }

        if (resultadoPesquisa.length > 0) {
            return resultadoPesquisa
        }else{
            return undefined
        }
        
    },
    findByMarca: (marca) => {
      

        let marcaConsultada = db.marca.find(element => element.marca === marca.toString().toUpperCase())        
        let resultadoPesquisaMarca = []
        
        for (let i in db.produtos){
           
            if (db.produtos[i].id_marca === marcaConsultada.id){
                resultadoPesquisaMarca.push(db.produtos[i])
            }
        }
              
        if (resultadoPesquisaMarca.length > 0) {
            return resultadoPesquisaMarca
        }else{
            return undefined
        }
                
    },
    findByProcessador: (processador) => {
        let processadorConsultado = db.processador.find(element => element.processador === processador.toString().toUpperCase())        
        let resultadoPesquisaprocessador = []
        
        for (let i in db.produtos){
           
            if (db.produtos[i].id_processador === processadorConsultado.id){
                resultadoPesquisaprocessador.push(db.produtos[i])
            }
        }
              
        if (resultadoPesquisaprocessador.length > 0) {
            return resultadoPesquisaprocessador
        }else{
            return undefined
        }
    }
}

module.exports = ProdutoModel