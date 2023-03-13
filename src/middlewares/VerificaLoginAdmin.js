const VerificaLoginAdminMiddlaware = (req, res, next) => {
    const LoginAdmin = require("../database/LoginAdmin");
    
    const dadosLoginAdmin = req.body;
    
    console.log("vai mostrar o req.body")
    console.log(req.body)
    console.log("mostrou o req.body")
    let email = dadosLoginAdmin.vLoginEmailAdmin;
    let senha = dadosLoginAdmin.vLoginSenhaAdmin;

    console.log(dadosLoginAdmin)

    if (LoginAdmin.findEmail(email)) {
        //aqui verifica se tem o email do Admin na base

        console.log("email bateu")

        console.log("agora vai validar a senha...")
        

        if (LoginAdmin.findSenha(email,senha)) {

            console.log("email e senha bateu")
        //se achar o email, vai verificar se a senha informada bate com o email que entrou
        req.session.user = LoginAdmin.findAdmin(email);

        console.log("salvou na session")

        return next();
        } else {
        console.log("Senha não bateu"); //se a senha não bater, vai retornar erro que a senha ta incorreta
        return res.render("admin", { error: "Dados Incorretos" });
        }
    } else {
        console.log("Email não bateu"); //se o email ta incorreto nem valida senha, só diz que o email ta errado.
        return res.render("admin", { error: "Dados Incorretos" });
    }
};

module.exports = VerificaLoginAdminMiddlaware;
