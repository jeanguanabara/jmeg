const VerificaLoginClienteMiddlaware = (req,res,next) => {
    const dadosLogin = req.query
    const Cliente = require('../models/Cliente')
    const email = dadosLogin.vLoginEmailCliente
    const senha = dadosLogin.vLoginSenhaCliente

    console.log(email)
    console.log(senha)


    if (Cliente.findEmail(email)){
        console.log('Email bateu')
        if (Cliente.findSenha(email,senha)){
            console.log('Senha bateu')
            return next()
        }else {
            console.log('Senha não bateu')
            return res.render('login', {error: "Senha Incorreta"})
        }
    }else {
        console.log('Email não bateu')
        return res.render('login', {error: "Email Incorreta"})
    }


  

    

   








    

    
    
}


module.exports = VerificaLoginClienteMiddlaware