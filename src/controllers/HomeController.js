const HomeController = {
    showHomePage: (req,res)=> {
        return res.render("index")
    },
    showConsultaProd:(req,res)=> {
        console.log(req.url)
        return res.render("consultaProdutos")
    },
    showMeuCarrinho: (req, res)=>{
        return res.render("meuCarrinho")
    },
    showLogin:(req, res)=>{
        return res.render("login")
    },
    showCadastro:(req, res)=>{
        return res.render("cadastro")
    },
    showItemVenda:(req, res)=>{
        return res.render("itemVenda")
    },
    showHomeCliente:(req, res)=>{
        return res.render("homecliente", {clienteLogado: req.session.cliente})
    },
    showEditaMeuCadastro:(req, res)=>{
        return res.render("editameucadastro", {clienteLogado: req.session.cliente})
    },
    showMeusPedidos:(req, res)=>{
        return res.render("meuspedidos", {clienteLogado: req.session.cliente})
    }

    
}


module.exports = HomeController

    