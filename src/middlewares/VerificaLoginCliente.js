const VerificaLoginClienteMiddlaware = (req,res,next) => {
    const dadosLogin = req.body
    const LoginCliente = require('../models/LoginCliente')
    

    const email = dadosLogin.vLoginEmailCliente
    const senha = dadosLogin.vLoginSenhaCliente




    if (LoginCliente.findEmail(email)){ //aqui verifica se tem o email do LoginCliente na base
        
        if (LoginCliente.findSenha(email,senha)){ //se achar o email, vai verificar se a senha informada bate com o email que entrou
            
            

           
            
            req.session.cliente = LoginCliente.findCliente(email) // SALVA CLIENTE NA SESSION
            console.log(req.session.cliente)
            
            
            return next()
        }else {
             //se a senha não bater, vai retornar erro que a senha ta incorreta
            return res.render('login', {urlDestino: undefined, error: "Dados Incorretos"})
        }
    }else {
        //se o email ta incorreto nem valida senha, só diz que o email ta errado.
        return res.render('login', {urlDestino: undefined, error: "Dados Incorretos"})
    }
    
    

}//FIM MIDDLEWARE

    
    




module.exports = VerificaLoginClienteMiddlaware