const VerificaLoginClienteMiddlaware = async (req,res,next) => {
    const Cliente = require('../models/Cliente')
    
    let contador = Object.keys(req.body).length

    if (contador == 2){
        const dadosLogin = req.body
        const LoginCliente = require('../database/LoginCliente')
        

        const email = dadosLogin.vLoginEmailCliente
        const senha = dadosLogin.vLoginSenhaCliente


        




        if (LoginCliente.findEmail(email)){ //aqui verifica se tem o email do LoginCliente na base
            console.log('retornou true')
            if (LoginCliente.findSenha(email,senha)){ //se achar o email, vai verificar se a senha informada bate com o email que entrou
                
                

                await Cliente.findAll({
                    where: {
                        email: email
                    }
                })
                .then((rtn)=> {
                    req.session.cliente = rtn[0].dataValues  // SALVA CLIENTE NA SESSION
                })
                 
                
                return next()
            }  else {
                //se a senha não bater, vai retornar erro que a senha ta incorreta
                return res.render('login', {urlDestino: undefined, error: "Dados Incorretos"})
            }
        }  else {
            //se o email ta incorreto nem valida senha, só diz que o email ta errado.
            return res.render('login', {urlDestino: undefined, error: "Dados Incorretos"})
        }
    } else if (contador == 12){
        

        
        next()
    }

    
    
    

}//FIM MIDDLEWARE

    
    




module.exports = VerificaLoginClienteMiddlaware
