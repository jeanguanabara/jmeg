const db = require('../database/db.json');
const Marca = require('../models/Marca')
const Processador = require('../models/Processador')
const Ram = require('../models/Ram')
const Tela = require('../models/Tela')
const Produtos = require('../models/Produtos')


const ProdutoModel = {
    findAll : async ()=> {
        let marca = await Marca.findAll()
        let processador = await Processador.findAll()
        let ram = await Ram.findAll()
        let tela = await Tela.findAll()
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
        
        
        return produto


    },
    findComplementos: async () => {
        let marca = await Marca.findAll()
        
        
        console.log("passou pelo find complementos")
        console.log(marca.dataValues)
        console.log("marca está acima")
       
        return {marca, processador, ram, tela}

        // let processador = await Processador.findAll()
        // let ram = await Ram.findAll()
        // let tela = await Tela.findAll()
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