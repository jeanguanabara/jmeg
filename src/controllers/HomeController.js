
const ProdutosModel = require('../models/ProdutoModel');

const HomeController = {
    showHomePage: (req,res)=> {
        
        console.log(ProdutosModel.findHomeMenorValor())
        return res.render("index")
       
    },
    showConsultaProd:(req,res)=> {
        
        return res.render("consultaProdutos")
    },
    showMeuCarrinho: (req, res)=>{
        return res.render("meuCarrinho", {clienteLogado: req.session.cliente})
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

    