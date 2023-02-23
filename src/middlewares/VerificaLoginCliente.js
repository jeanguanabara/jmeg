const VerificaLoginClienteMiddlaware = (req,res,next) => {
    const dadosLogin = req.query
    const Cliente = require('../models/Cliente')
    const email = dadosLogin.vLoginEmailCliente
    const senha = dadosLogin.vLoginSenhaCliente

    console.log(email)
    console.log(senha)


    if (Cliente.findEmail(email)){ //aqui verifica se tem o email do cliente na base
        console.log('Email bateu')
        if (Cliente.findSenha(email,senha)){ //se achar o email, vai verificar se a senha informada bate com o email que entrou
            console.log('Senha bateu')
            return next()
        }else {
            console.log('Senha não bateu') //se a senha não bater, vai retornar erro que a senha ta incorreta
            return res.render('login', {error: "Senha Incorreta"})
        }
    }else {
        console.log('Email não bateu') //se o email ta incorreto nem valida senha, só diz que o email ta errado.
        return res.render('login', {error: "Email Incorreto"})
    }

    
    
}


module.exports = VerificaLoginClienteMiddlaware