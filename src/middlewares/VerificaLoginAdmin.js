const VerificaLoginAdminMiddlaware = (req,res,next) => {
    
  const dadosLogin = req.query
  const Admin = require('../database/Admin')
  const email = dadosLogin.vLoginEmailAdmin
  const senha = dadosLogin.vLoginSenhaAdmin

  console.log(email)
  console.log(senha)


  if (Admin.findEmail(email)){ //aqui verifica se tem o email do Admin na base
      console.log('Email bateu')
      if (Admin.findSenha(email,senha)){ //se achar o email, vai verificar se a senha informada bate com o email que entrou
          console.log('Senha bateu')
          return next()
      }else {
          console.log('Senha não bateu') //se a senha não bater, vai retornar erro que a senha ta incorreta
          return res.render('admin', {error: "Senha Incorreta"})
      }
  }else {
      console.log('Email não bateu') //se o email ta incorreto nem valida senha, só diz que o email ta errado.
      return res.render('admin', {error: "Email Incorreto"})
  }

  
  
}


module.exports = VerificaLoginAdminMiddlaware