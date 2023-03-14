const VerificaLoginAdminMiddlaware = async (req, res, next) => {
    const LoginAdmin = require("../database/LoginAdmin");
    
    const dadosLoginAdmin = req.body;
    
    
    let email = dadosLoginAdmin.vLoginEmailAdmin;
    let senha = dadosLoginAdmin.vLoginSenhaAdmin;

    console.log(dadosLoginAdmin)

    if (await LoginAdmin.findEmail(email)) {
        //aqui verifica se tem o email do Admin na base

       
        

        if (await  LoginAdmin.findSenha(email,senha)) {

            
        //se achar o email, vai verificar se a senha informada bate com o email que entrou
        req.session.user = LoginAdmin.findAdmin(email);

        

        return next();
        } else {
         //se a senha não bater, vai retornar erro que a senha ta incorreta
        return res.render("admin", { error: "Dados Incorretos" });
        }
    } else {
        ; //se o email ta incorreto nem valida senha, só diz que o email ta errado.
        return res.render("admin", { error: "Dados Incorretos" });
    }
};

module.exports = VerificaLoginAdminMiddlaware;
