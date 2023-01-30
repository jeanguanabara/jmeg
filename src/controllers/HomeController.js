const HomeController = {
    showHomePage: (req,res)=> {
        return res.render("index")
    },
    showConsultaProd:(req,res)=> {
        return res.render("consultaProdutos")
    },
    showMeuCarrinho: (req, res)=>{
        return res.render("meuCarrinho")
    },
    showLogin:(req, res)=>{
        return res.render("Login")
    },
    showCadastro:(req, res)=>{
        return res.render("Cadastro")
    }

    
}


module.exports = HomeController

    