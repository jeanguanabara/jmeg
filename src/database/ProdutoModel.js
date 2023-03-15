
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
        .then((rtn)=> {
            for (i in rtn){
                produtos.push(rtn[i].dataValues)
            }
        })

        let resultadoPesquisa = new Array

        for (let i in produtos){
            let consultaItem = produtos[i].nome.toLowerCase()
            if (consultaItem.includes(nome.toLowerCase())){
                resultadoPesquisa.push(produtos[i])
            }
        }

        if (resultadoPesquisa.length > 0) {
            return resultadoPesquisa
        }else{
            return undefined
        }
        
    },
    findByMarca: async (marca) => {
        
        let marcaConsultada = new Array
        let resultadoPesquisaMarca = new Array
        

        await Marca.findAll({
            where: {
                marca: marca
            }
        })
        .then((rtn)=>{
            marcaConsultada.push(rtn[0].dataValues)
        })

        

                
        await Produtos.findAll({
            where: {
                id_marca: marcaConsultada[0].id
            }
        })
        .then((rtn)=> {
            for (i in rtn){
                resultadoPesquisaMarca.push(rtn[i].dataValues)
            }
        })
        
        
              
        if (resultadoPesquisaMarca.length > 0) {
            return resultadoPesquisaMarca
        }else{
            return undefined
        }
                
    },
    findByProcessador: async (processador) => {
    
    
        let processadorConsultado = new Array
        let resultadoPesquisaProcessador = new Array
        

        await Processador.findAll({
            where: {
                processador: processador 
            }
        })
        .then((rtn)=>{
            processadorConsultado.push(rtn[0].dataValues)
        })

        

                
        await Produtos.findAll({
            where: {
                id_processador: processadorConsultado[0].id
            }
        })
        .then((rtn)=> {
            for (i in rtn){
                resultadoPesquisaProcessador.push(rtn[i].dataValues)
            }
        })
        
        
              
        if (resultadoPesquisaProcessador.length > 0) {
            return resultadoPesquisaProcessador
        }else{
            return undefined
        }
    
    
    
    
    
    
    
    
    
    
    
    
        //     let processadorConsultado = db.processador.find(element => element.processador === processador.toString().toUpperCase())        
    //     let resultadoPesquisaprocessador = []
        
    //     for (let i in db.produtos){
           
    //         if (db.produtos[i].id_processador === processadorConsultado.id){
    //             resultadoPesquisaprocessador.push(db.produtos[i])
    //         }
    //     }
              
    //     if (resultadoPesquisaprocessador.length > 0) {
    //         return resultadoPesquisaprocessador
    //     }else{
    //         return undefined
    //     }
    }
    
}

module.exports = ProdutoModel