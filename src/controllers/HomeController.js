
const ProdutosModel = require('../models/ProdutoModel');

const HomeController = {
    showHomePage: (req,res)=> {
        
        console.log()
        return res.render("index", {itensMenorValor: ProdutosModel.findHomeMenorValor(), itensMaisRecentes: ProdutosModel.findHomeMaisRecentes()})
       
    },
    showConsultaProd:(req,res)=> {

        console.log(req.params)
        
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

        let {id} = req.params
        
        console.log(ProdutosModel.findbyID(id))
        console.log(ProdutosModel.findComplementos())

        return res.render("itemVenda", {item: ProdutosModel.findbyID(id),complementos: ProdutosModel.findComplementos()} )
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

    