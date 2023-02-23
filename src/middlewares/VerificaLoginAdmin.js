const VerificaLoginAdmin = (req,res,next) => {
    let dadosLogin = req.query
    let baseAdmin = require('../database/db.json')


    for (let i in baseAdmin){

        console.log(baseAdmin.clientes[i].email)
        console.log(baseAdmin.clientes[i].senha)
        
        if (dadosLogin.vLoginEmailAdmin === baseAdmin.clientes[i].email){
            console.log('email bateu')
            console.log(baseAdmin.clientes[i].email)
          if (dadosLogin.vLoginSenhaAdmin.clientes == baseAdmin[i].senha){
            console.log('senha bateu')
             return next()
          }
        } 
    }

    return res.render('login', {error: 'Dados incorretos'})
}

    

    module.exports = VerificaLoginAdmin;