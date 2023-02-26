const VerificaLoginClienteMiddlaware = (req,res,next) => {
    const dadosLogin = req.body
    const LoginCliente = require('../models/LoginCliente')
    const PassModel = require('../models/PassModel')
    
    const email = dadosLogin.vLoginEmailCliente
    const senha = dadosLogin.vLoginSenhaCliente




    // if (LoginCliente.findEmail(email)){ //aqui verifica se tem o email do LoginCliente na base
    //     console.log('Email bateu' + ' -verificalogin middleware')
    //     if (LoginCliente.findSenha(email,senha)){ //se achar o email, vai verificar se a senha informada bate com o email que entrou
            
            

           
            
    //         req.session.cliente = LoginCliente.findCliente(email) // SALVA CLIENTE NA SESSION
            
            
            
    //         return next()
    //     }else {
    //          //se a senha não bater, vai retornar erro que a senha ta incorreta
    //         return res.render('login', {error: "Senha Incorreta"})
    //     }
    // }else {
    //     //se o email ta incorreto nem valida senha, só diz que o email ta errado.
    //     return res.render('login', {error: "Email Incorreto"})
    // }
    

    if (LoginCliente.findEmail(email)) {

        console.log( 'achou email')
        let cliente = LoginCliente.findCliente(email)
        if (PassModel.passCrypt(senha,cliente.senha)){
            console.log('achou senha')
            req.session.cliente = cliente
            return next()
        }

    } else{
        return res.render('login', {error: "Dados Incorretos"})
    
    }
}//FIM MIDDLEWARE

    
    



module.exports = VerificaLoginClienteMiddlaware