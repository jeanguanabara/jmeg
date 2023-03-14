const db = require('../database/db.json');
const Produtos = require('../models/Produtos')
const Marca = require('../models/Marca')
const Processador = require('../models/Processador')
const Ram = require('../models/Ram')
const Tela = require('../models/Tela')

const ProdutoModel = {
    findAll : async ()=> {
        let marca = new Array
        let processador = new Array
        let ram = new Array
        let tela = new Array
        let produtos = new Array

        await Produtos.findAll()
        .then((rtr)=>{
            for (i in rtr){
                produtos.push(rtr[i].dataValues)
            }
        })

        await Marca.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                marca.push(rtn[i].dataValues)
            }
        })
        await Processador.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                processador.push(rtn[i].dataValues)
            }
        })
        await Ram.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                ram.push(rtn[i].dataValues)
            }
        })
        await Tela.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                tela.push(rtn[i].dataValues)
            }
        })
        return {marca, processador, ram, tela, produtos}
    },
    findAllProdutos: async ()=> {
        let produtos = new Array

        await Produtos.findAll()
        .then((rtr)=>{
            for (i in rtr){
                produtos.push(rtr[i].dataValues)
            }
        })


        return produtos
    }
    ,
    findHomeMenorValor : async () => {
        let produtos = new Array

        await Produtos.findAll()
        .then((rtr)=>{
            for (i in rtr){
                produtos.push(rtr[i].dataValues)
            }
        })
        

        function valorMenor(a,b){
            
            return (a.valor-b.valor)
        }
        
        let itensMenorValor = produtos.sort(valorMenor)
        
       

        
       
        return itensMenorValor.slice(0,3)

          
    },
    findHomeMaisRecentes: async () => {
        let produtos = new Array

        await Produtos.findAll()
        .then((rtr)=>{
            for (i in rtr){
                produtos.push(rtr[i].dataValues)
            }
        })

        
        function valorMenor(a,b){
            
            return (b.id - a.id)
        }


        itensMenorValor = produtos.sort(valorMenor)
        
        return itensMenorValor.slice(0,3)
    },
    findbyID: async (id)=>  {
        
        let produtoImport = await Produtos.findByPk(id)
        

        let produto = produtoImport.dataValues

        

        console.log(produto)
        
       
        return produto


    },
    findComplementos: async () => {
        let marca = new Array
        let processador = new Array
        let ram = new Array
        let tela = new Array
        await Marca.findAll()
        .then((rtn)=>{
                
            
            for (i in rtn){
                
                marca.push(rtn[i].dataValues)
            }
        })
        .catch((err)=>{
            console.log('Error: ' + err)
        })
        await Processador.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                processador.push(rtn[i].dataValues)
            }
        })
        .catch((err)=>{
            console.log('Error: ' + err)
        })
        await Ram.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                ram.push(rtn[i].dataValues)
            }
        })
        .catch((err)=>{
            console.log('Error: ' + err)
        })
        await Tela.findAll()
        .then((rtn)=>{

            
            for (i in rtn){
                tela.push(rtn[i].dataValues)
            }
        })
        .catch((err)=>{
            console.log('Error: ' + err)
        })
        

        return {marca, processador, ram, tela}
    },
    findByBome: async (nome) => {
        let produtos = new Array

        await Produtos.findAll()

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