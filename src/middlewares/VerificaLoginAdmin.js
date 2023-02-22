const VerificaLoginAdmin = (req,res,next) => {
    let dadosLogin = req.query
    let baseAdmin = require('../database/db.json')


    for (let i in baseAdmin){

        console.log(baseAdmin[i].email)
        console.log(baseAdmin[i].senha)
        
        if (dadosLogin.vLoginEmailAdmin === baseAdmin[i].email){
            console.log('email bateu')
            console.log(baseAdmin[i].email)
          if (dadosLogin.vLoginSenhaAdmin == baseAdmin[i].senha){
            console.log('senha bateu')
             return next()
          }
        } 
    }

    return res.render('login', {error: 'Dados incorretos'})
}

    

    module.exports = VerificaLoginAdmin;