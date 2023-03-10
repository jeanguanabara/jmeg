const {Cliente} = require('../models/Cliente')
const {Endereco} = require('../models/Endereco')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const VerificaCadastroCliente =  async (req,res,next) => {
    
    let contador = Object.keys(req.body).length

    if (contador == 12){
    
    
    const dadosCliente = req.body
    console.log(dadosCliente)
    
    const {name, cpf, email, cep, uf, cidade, bairro, logradouro, numero, complemento, senha1, senha2} = req.body

    
    const newEndereco = {
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf
    }

     await Endereco.create(newEndereco)

     

     
     
    



     next()




    } else if (contador == 2){
        next()
    }
}

module.exports = VerificaCadastroCliente