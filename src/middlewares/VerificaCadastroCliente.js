const Cliente = require('../models/Cliente')
const Endereco = require('../models/Endereco')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const pass = require("../database/PassModel")

const VerificaCadastroCliente =  async (req,res,next) => {

    
    let contador = Object.keys(req.body).length

    if (contador == 12){

    
    
    const dadosCliente = req.body
    console.log(dadosCliente)
    
    const {name, cpf, email, cep, uf, cidade, bairro, logradouro, numero, complemento, senha1, senha2} = req.body

    
   

    await Endereco.create({
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf
    })
    .then(async (enderecoSalvo) => {
        await Cliente.create({
            nome: name, 
            cpf: cpf,
            email: email,
            senha: pass.passCrypt(senha1),
            id_end: enderecoSalvo.dataValues.id
        })

        
    })
    .catch((err)=> {
        console.log("Error: " + err)
    })


   


     


     
     
    



     next()




    } else if (contador == 2){
        next()
    }
}

module.exports = VerificaCadastroCliente