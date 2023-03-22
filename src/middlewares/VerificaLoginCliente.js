


const VerificaLoginClienteMiddlaware = async (req,res,next) => {
    
    
    let contador = Object.keys(req.body).length

    if (contador == 2){
        const dadosLogin = req.body
        const LoginCliente = require('../database/LoginCliente')
        const Cliente = require('../models/Cliente')
        const PassModel = require('../database/PassModel')
        

        const email = dadosLogin.vLoginEmailCliente
        const senha = dadosLogin.vLoginSenhaCliente


        
     
        let listaClientes = Cliente.findAll()
        .then((rtn)=> {
            for (let i in rtn){
                if(rtn[i].dataValues.email == email){
                    if (PassModel.passValidation(senha, rtn[i].dataValues.senha)){
                        req.session.cliente = rtn[i].dataValues

                        return next()
                    }
                }
           
                
            }

            return res.render('login', {urlDestino: undefined, error: "Dados Incorretos"})
        })


        await listaClientes


    } else if (contador == 12){
        

        
        next()
    }

    

    

}//FIM MIDDLEWARE

    
    




module.exports = VerificaLoginClienteMiddlaware
