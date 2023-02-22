const VerificaLoginClienteMiddlaware = (req,res,next) => {
    let dadosLogin = req.query
    let baseCliente = require('../database/cliente.json')


    for (let i in baseCliente){

        console.log(baseCliente[i].email)
        console.log(baseCliente[i].senha)
        
        if (dadosLogin.vLoginEmailCliente === baseCliente[i].email){
            console.log('email bateu')
            console.log(baseCliente[i].email)
          if (dadosLogin.vLoginSenhaCliente == baseCliente[i].senha){
            console.log('senha bateu')
             return next()
          }else {
            
            return res.render('login',  {error: "Senha Incorreta"})
          }
        } else {
          
          return res.render('login',  {error: "Email Incorreto"})
        }
    }
    

    

    // const {vLoginEmailCliente, vLoginSenhaCliente} = req.query
    // console.log(vLoginEmailCliente)
    // console.log(vLoginSenhaCliente)

    // const verifyExists = baseCliente.findOne(vLoginEmailCliente)
    // console.log(verifyExists)
    
   

    // next()








    

    
    
}


module.exports = VerificaLoginClienteMiddlaware